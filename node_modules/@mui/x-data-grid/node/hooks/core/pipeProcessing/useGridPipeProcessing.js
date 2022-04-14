"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGridPipeProcessing = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _toPropertyKey2 = _interopRequireDefault(require("@babel/runtime/helpers/toPropertyKey"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _useGridApiMethod = require("../../utils/useGridApiMethod");

var _events = require("../../../models/events");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Implement the Pipeline Pattern
 *
 * More information and detailed example in (TODO add link to technical doc when ready)
 *
 * Some plugins contains custom logic to enrich data provided by other plugins or components.
 * For instance, the row grouping plugin needs to add / remove the grouping columns when the grid columns are updated.
 *
 * =====================================================================================================================
 *
 * The plugin containing the custom logic must use:
 *
 * - `useGridRegisterPipeProcessor` to register their processor.
 *   When the processor changes, it will fire `GridEvents.pipeProcessorRegister` to re-apply the whole pipe.
 *
 * =====================================================================================================================
 *
 * The plugin or component that needs to enrich its data must use:
 *
 * - `apiRef.current.unstable_applyPipeProcessors` to run in chain all the processors of a given group.
 *
 * - `GridEvents.pipeProcessorRegister` to re-apply the whole pipe when a processor of this pipe changes.
 *
 */
const useGridPipeProcessing = apiRef => {
  const processorsCache = React.useRef({});
  const registerPipeProcessor = React.useCallback((group, id, processor) => {
    if (!processorsCache.current[group]) {
      processorsCache.current[group] = {};
    }

    const groupProcessors = processorsCache.current[group];
    const oldProcessor = groupProcessors[id];

    if (oldProcessor !== processor) {
      processorsCache.current[group] = (0, _extends2.default)({}, groupProcessors, {
        [id]: processor
      });
      apiRef.current.publishEvent(_events.GridEvents.pipeProcessorRegister, group);
    }

    return () => {
      const _ref = processorsCache.current[group],
            otherProcessors = (0, _objectWithoutPropertiesLoose2.default)(_ref, [id].map(_toPropertyKey2.default));
      processorsCache.current[group] = otherProcessors;
      apiRef.current.publishEvent(_events.GridEvents.pipeProcessorUnregister, group);
    };
  }, [apiRef]);
  const applyPipeProcessors = React.useCallback((...args) => {
    const [group, value, context] = args;

    if (!processorsCache.current[group]) {
      return value;
    }

    const preProcessors = Object.values(processorsCache.current[group]);
    return preProcessors.reduce((acc, preProcessor) => {
      return preProcessor(acc, context);
    }, value);
  }, []);
  const preProcessingApi = {
    unstable_registerPipeProcessor: registerPipeProcessor,
    unstable_applyPipeProcessors: applyPipeProcessors
  };
  (0, _useGridApiMethod.useGridApiMethod)(apiRef, preProcessingApi, 'GridPipeProcessingApi');
};

exports.useGridPipeProcessing = useGridPipeProcessing;