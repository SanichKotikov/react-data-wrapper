import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { DataState, FailureElement, FetchDataFunction, State } from './types';
import useDataState from './useDataState';

interface DataResource {
  state: State;
  FailureComp: FailureElement;
}

export function useDataResource(
  fetcher: FetchDataFunction,
  failure: FailureElement,
  initState?: DataState,
): Readonly<DataResource> {
  const [reloading, setReloading] = useState(false);
  const { setState, ...state } = useDataState(initState);

  useEffect(() => {
    setState.load();
    fetcher().then(setState.done).catch(setState.error);
  }, [fetcher]);

  const onReloadClick = useCallback(() => {
    setReloading(true);
    fetcher()
      .then(setState.done)
      .catch(() => setReloading(false));
  }, [fetcher, setState]);

  const FailureComp = useMemo(
    () => React.cloneElement(failure, { reloading, onReloadClick }),
    [failure, reloading, onReloadClick],
  );

  return { state, FailureComp };
}
