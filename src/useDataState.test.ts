import { act, renderHook } from '@testing-library/react-hooks';
import { DataState } from './types';
import useDataState from './useDataState';

test('should return idle state', () => {
  const { result } = renderHook(() => useDataState());
  expect(result.current.loading).toBeFalsy();
  expect(result.current.failure).toBeFalsy();
  expect(result.current.success).toBeFalsy();
});

test('should return loading state', () => {
  const { result } = renderHook(() => useDataState());
  act(() => result.current.setState.load());
  expect(result.current.loading).toBeTruthy();
  expect(result.current.failure).toBeFalsy();
  expect(result.current.success).toBeFalsy();
});

test('should return failure state', () => {
  const { result } = renderHook(() => useDataState());
  act(() => result.current.setState.error());
  expect(result.current.loading).toBeFalsy();
  expect(result.current.failure).toBeTruthy();
  expect(result.current.success).toBeFalsy();
});

test('should return success state', () => {
  const { result } = renderHook(() => useDataState());
  act(() => result.current.setState.done());
  expect(result.current.loading).toBeFalsy();
  expect(result.current.failure).toBeFalsy();
  expect(result.current.success).toBeTruthy();
});

test('should use initial state', () => {
  const { result } = renderHook(() => useDataState(DataState.Loading));
  expect(result.current.loading).toBeTruthy();
  expect(result.current.failure).toBeFalsy();
  expect(result.current.success).toBeFalsy();
});
