import type { ReactElement } from 'react';
import React from 'react';
import type { State, WrapperProps } from './types';
import { render } from './render';

interface Props extends WrapperProps {
  state: Readonly<State>;
}

export const ControlledDataWrapper = React.memo<Readonly<Props>>(
  function ControlledDataWrapper({ state, loading, failure, isEmpty, empty, children }) {
    return render(state, loading, failure, children, isEmpty, empty) as ReactElement;
  },
);
