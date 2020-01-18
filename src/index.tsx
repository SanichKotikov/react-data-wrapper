import React, { useEffect, useCallback } from 'react';
import useStates from './useStates';

interface IFailureProps {
  onReload: () => Promise<void>;
}

interface IProps {
  isEmpty: boolean;
  fetchFunc: () => Promise<void>;
  loading: React.ReactElement;
  failure: React.FunctionComponent<IFailureProps>;
  empty: React.ReactElement;
  children: React.ReactElement;
}

export default React.memo<IProps>(
  function DataWrapper({
    isEmpty,
    fetchFunc,
    loading,
    failure: ErrComp,
    empty,
    children,
  }) {
    const { setState, ...state } = useStates();

    useEffect(() => {
      setState.load();
      fetchFunc()
        .then(setState.done)
        .catch(setState.error);
    }, [setState]);

    const reload = useCallback(() => {
      return fetchFunc().then(setState.done);
    }, [setState]);

    switch (true) {
      case state.loading && isEmpty: return loading;
      case state.failure: return <ErrComp onReload={reload} />;
      case state.success && isEmpty: return empty;
      case state.success && !isEmpty: return children;
      default: return null;
    }
  }
);
