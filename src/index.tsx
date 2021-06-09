import React from 'react';
import type { FetchDataFunction, WrapperProps } from './types';
import { DataState } from './types';
import { useDataResource } from './useDataResource';
import { ControlledDataWrapper } from './ControlledDataWrapper';

export { DataState, useDataResource, ControlledDataWrapper };
export type { FailureProps } from './types';

interface Props extends WrapperProps {
  initState?: DataState;
  fetcher: FetchDataFunction;
}

export default React.memo<Readonly<Props>>(function DataWrapper({
  initState,
  fetcher,
  failure,
  ...props
}) {
  const { state, FailureComp } = useDataResource(fetcher, failure, initState);
  return <ControlledDataWrapper state={state} failure={FailureComp} {...props} />;
});
