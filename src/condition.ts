export interface IState {
  loading: boolean;
  failure: boolean;
  success: boolean;
}

function condition<T extends any>(
  state: Readonly<IState>,
  loading: T,
  failure: T,
  children: T,
  isEmpty?: boolean,
  empty?: T,
) {
  if (empty === undefined) {
    if (state.loading) return loading;
    if (state.failure) return failure;
    if (state.success) return children;
  } else {
    if (state.loading && isEmpty) return loading;
    if (state.failure) return failure;
    if (state.success && isEmpty) return empty;
    if (!state.failure && !isEmpty) return children;
  }

  return null;
}

export default condition;
