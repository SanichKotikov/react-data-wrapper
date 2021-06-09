import type { ReactElement } from 'react';

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

export type FetchDataFunction = () => Promise<void>;

export interface FailureProps {
  reloading: boolean;
  onReloadClick: () => void
}

export type FailureElement = ReactElement<Readonly<FailureProps>>;
