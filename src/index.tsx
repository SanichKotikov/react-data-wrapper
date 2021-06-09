import type { ReactElement } from 'react';
import React from 'react';
import type { FailureElement, FetchDataFunction } from './types';
import { DataState } from './types';
import { useDataResource } from './useDataResource';
import { ControlledDataWrapper } from './ControlledDataWrapper';

export { DataState, useDataResource, ControlledDataWrapper };

interface IProps {
  initState?: DataState;
  fetcher: FetchDataFunction;
  loading: ReactElement;
  failure: FailureElement;
  isEmpty?: boolean;
  empty?: ReactElement;
  children: ReactElement;
}

export default React.memo<Readonly<IProps>>(function DataWrapper({
  initState,
  fetcher,
  failure,
  ...otherProps
}) {
  const { state, FailureComp } = useDataResource(fetcher, failure, initState);

  return (
    <ControlledDataWrapper
      state={state}
      failure={FailureComp}
      {...otherProps}
    />
  );
});
