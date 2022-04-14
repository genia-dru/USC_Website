import * as React from 'react';
import { GridApiCommunity } from '../../../models/api/gridApiCommunity';
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
export declare const useGridPipeProcessing: (apiRef: React.MutableRefObject<GridApiCommunity>) => void;
