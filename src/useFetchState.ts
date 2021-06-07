import { useCallback } from 'react';

import useStates, { DataState } from './useStates';
import { IState } from './condition';

function useFetchState(
  fetchFunc: () => Promise<void>,
  initState = DataState.Idle,
): [IState, () => void, () => Promise<void>] {
  const { setState, ...state } = useStates(initState);

  const runFetch = useCallback(() => {
    setState.load();
    fetchFunc().then(setState.done).catch(setState.error);
  }, [fetchFunc, setState]);

  const reload = useCallback(() => {
    return fetchFunc().then(setState.done);
  }, [fetchFunc, setState]);

  return [state, runFetch, reload];
}

export default useFetchState;
