import React, { useEffect, useCallback } from 'react';
import useStates, { DataState } from './useStates';

export { DataState };

interface IProps {
  initState?: DataState;
  isEmpty?: boolean;
  fetchFunc: () => Promise<void>;
  loading: React.ReactElement;
  failure: (reload: () => Promise<void>) => React.ReactElement;
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

    const onReload = useCallback(() => {
      return fetchFunc().then(setState.done);
    }, [setState]);

    if (empty === undefined) {
      if (state.loading) return loading;
      if (state.failure) return failure(onReload);
      if (state.success) return children;
    } else {
      if (state.loading && isEmpty) return loading;
      if (state.failure) return failure(onReload);
      if (state.success && isEmpty) return empty;
      if (!state.failure && !isEmpty) return children;
    }

    return null;
  }
);
