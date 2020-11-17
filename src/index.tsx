import React, { useMemo, useEffect, useCallback } from 'react';
import useStates, { DataState } from './useStates';
import condition from './condition';

export { DataState };

interface IProps {
  initState?: DataState;
  isEmpty?: boolean;
  fetchFunc: () => Promise<void>;
  loading: React.ReactElement;
  failure: React.ReactElement<{ onReloadClick: () => Promise<void> }>;
  empty?: React.ReactElement;
  children: React.ReactElement;
}

export default React.memo<IProps>(
  function DataWrapper({
    initState,
    isEmpty,
    fetchFunc,
    loading,
    failure,
    empty,
    children,
  }) {
    const { setState, ...state } = useStates(initState);

    useEffect(() => {
      setState.load();
      fetchFunc()
        .then(setState.done)
        .catch(setState.error);
    }, [setState]);

    const failureFunc = useMemo(() => (
      (onReloadClick: () => Promise<void>) => (
        React.cloneElement(failure, {onReloadClick})
      )
    ), [failure]);

    const onReload = useCallback(() => {
      return fetchFunc().then(setState.done);
    }, [setState]);

    return condition(state, loading, failureFunc, children, onReload, isEmpty, empty);
  }
);
