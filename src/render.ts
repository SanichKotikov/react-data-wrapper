import type { ReactChild, ReactNode } from 'react';
import type { State } from './types';

export function render(
  state: Readonly<State>,
  loadingView: ReactChild,
  failureView: ReactChild,
  successView: ReactNode,
  isEmpty?: boolean,
  emptyView?: ReactChild,
): ReactNode {
  if (emptyView === undefined) {
    if (state.loading) return loadingView;
    if (state.failure) return failureView;
    if (state.success) return successView;
  }
  else {
    if (state.loading && isEmpty) return loadingView;
    if (state.failure) return failureView;
    if (state.success && isEmpty) return emptyView;
    if (!state.failure && !isEmpty) return successView;
  }

  return null;
}
