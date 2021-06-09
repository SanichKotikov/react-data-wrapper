import type { ReactChild, ReactElement } from 'react';
import React from 'react';
import type { State } from './types';
import { render } from './render';

interface IProps {
  state: Readonly<State>;
  loading: ReactChild;
  failure: ReactChild;
  isEmpty?: boolean;
  empty?: ReactChild;
  children: ReactChild;
}

export const ControlledDataWrapper = React.memo<Readonly<IProps>>(
  function ControlledDataWrapper({ state, loading, failure, isEmpty, empty, children }) {
    return render(state, loading, failure, children, isEmpty, empty) as ReactElement;
  },
);
