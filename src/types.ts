import type { ReactChild, ReactElement, ReactNode } from 'react';

export enum DataState {
  Idle,
  Loading,
  Success,
  Failure,
}

export interface State {
  loading: boolean;
  failure: boolean;
  success: boolean;
}

export interface SetState {
  load: () => void;
  done: () => void;
  error: () => void;
}

export type FetchDataFunction = () => Promise<void>;

export interface FailureProps {
  reloading: boolean;
  onReloadClick: () => void
}

export type FailureElement = ReactElement<Readonly<FailureProps>>;

export interface WrapperProps {
  loading: ReactChild;
  failure: FailureElement;
  isEmpty?: boolean;
  empty?: ReactChild;
  children: ReactNode;
}
