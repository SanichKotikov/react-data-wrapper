import React, { useEffect, useMemo } from 'react';
import { DataState } from './useStates';
import useFetchState from './useFetchState';
import ControlledDataWrapper from './ControlledDataWrapper';

export { DataState, useFetchState, ControlledDataWrapper };

interface IProps {
  initState?: DataState;
  isEmpty?: boolean;
  fetchFunc: () => Promise<void>;
  loading: React.ReactElement;
  failure: React.ReactElement<{ onReloadClick: () => Promise<void> }>;
  empty?: React.ReactElement;
  children: React.ReactElement;
}

export default React.memo<IProps>(function DataWrapper({
  initState,
  fetchFunc,
  failure,
  ...otherProps
}) {
  const [state, reload] = useFetchState(fetchFunc, initState);

  const failureWithReload = useMemo(
    () => React.cloneElement(failure, { onReloadClick: reload }),
    [failure, reload],
  );

  return (
    <ControlledDataWrapper
      state={state}
      failure={failureWithReload}
      onReload={reload}
      {...otherProps}
    />
  );
});
