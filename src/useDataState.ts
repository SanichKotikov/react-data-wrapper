import { useMemo, useState } from 'react';
import type { SetState, State } from './types';
import { DataState } from './types';

interface StateHook extends State {
  setState: Readonly<SetState>;
}

function useDataState(init: DataState = DataState.Idle): Readonly<StateHook> {
  const [state, update] = useState(init);

  const setState = useMemo(() => ({
    load() { update(DataState.Loading); },
    done() { update(DataState.Success); },
    error() { update(DataState.Failure); },
  }), []);

  return {
    loading: state === DataState.Loading,
    success: state === DataState.Success,
    failure: state === DataState.Failure,
    setState,
  };
}

export default useDataState;
