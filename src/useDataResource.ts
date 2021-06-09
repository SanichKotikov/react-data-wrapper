import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { DataState, FailureElement, FetchDataFunction } from './types';
import useDataState from './useDataState';

export function useDataResource(
  fetcher: FetchDataFunction,
  failure: FailureElement,
  initState?: DataState,
) {
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
