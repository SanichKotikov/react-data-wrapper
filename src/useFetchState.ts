import { useCallback, useEffect } from 'react';

import useStates, { DataState } from './useStates';
import { IState } from './condition';

function useFetchState(
  fetchFunc: () => Promise<void>,
  initState = DataState.Idle,
): [IState, () => Promise<void>] {
  const { setState, ...state } = useStates(initState);

  useEffect(() => {
    setState.load();
    fetchFunc().then(setState.done).catch(setState.error);
  }, [fetchFunc, setState]);

  const reload = useCallback(() => {
    return fetchFunc().then(setState.done);
  }, [fetchFunc, setState]);

  return [state, reload];
}

export default useFetchState;
