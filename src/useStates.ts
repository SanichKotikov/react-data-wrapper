import { useState, useMemo } from 'react';

export enum DataState {
  Idle,
  Loading,
  Success,
  Failure,
}

function useStates(init: DataState = DataState.Idle) {
  const [state, update] = useState(init);

  const setState = useMemo(() => ({
    load() { update(DataState.Loading) },
    done() { update(DataState.Success) },
    error() { update(DataState.Failure) },
  }), []);

  return {
    loading: state === DataState.Loading,
    success: state === DataState.Success,
    failure: state === DataState.Failure,
    setState,
  };
}

export default useStates;
