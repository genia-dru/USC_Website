import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toPropertyKey from "@babel/runtime/helpers/esm/toPropertyKey";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { GridEvents } from '../../../models/events';
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

export var useGridPipeProcessing = function useGridPipeProcessing(apiRef) {
  var processorsCache = React.useRef({});
  var registerPipeProcessor = React.useCallback(function (group, id, processor) {
    if (!processorsCache.current[group]) {
      processorsCache.current[group] = {};
    }

    var groupProcessors = processorsCache.current[group];
    var oldProcessor = groupProcessors[id];

    if (oldProcessor !== processor) {
      processorsCache.current[group] = _extends({}, groupProcessors, _defineProperty({}, id, processor));
      apiRef.current.publishEvent(GridEvents.pipeProcessorRegister, group);
    }

    return function () {
      var _ref = processorsCache.current[group],
          removedGroupProcessor = _ref[id],
          otherProcessors = _objectWithoutProperties(_ref, [id].map(_toPropertyKey));

      processorsCache.current[group] = otherProcessors;
      apiRef.current.publishEvent(GridEvents.pipeProcessorUnregister, group);
    };
  }, [apiRef]);
  var applyPipeProcessors = React.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _ref2 = args,
        _ref3 = _slicedToArray(_ref2, 3),
        group = _ref3[0],
        value = _ref3[1],
        context = _ref3[2];

    if (!processorsCache.current[group]) {
      return value;
    }

    var preProcessors = Object.values(processorsCache.current[group]);
    return preProcessors.reduce(function (acc, preProcessor) {
      return preProcessor(acc, context);
    }, value);
  }, []);
  var preProcessingApi = {
    unstable_registerPipeProcessor: registerPipeProcessor,
    unstable_applyPipeProcessors: applyPipeProcessors
  };
  useGridApiMethod(apiRef, preProcessingApi, 'GridPipeProcessingApi');
};