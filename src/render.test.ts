import { render } from './render';

test('should return null', () => {
  const state = { loading: false, failure: false, success: false };
  expect(render(state, 'loading', 'failure', 'child')).toBeNull();
});

test('should return loading', () => {
  const state = { loading: true, failure: false, success: false };
  expect(render(state, 'loading', 'failure', 'child')).toBe('loading');
  expect(render(state, 'loading', 'failure', 'child', true, 'empty')).toBe('loading');
});

test('should return failure', () => {
  const state = { loading: false, failure: true, success: false };
  expect(render(state, 'loading', 'failure', 'child')).toBe('failure');
  expect(render(state, 'loading', 'failure', 'child', true, 'empty')).toBe('failure');
});

test('should return empty', () => {
  const state = { loading: false, failure: false, success: true };
  expect(render(state, 'loading', 'failure', 'child', true, 'empty')).toBe('empty');
});

test('should return success', () => {
  const state = { loading: false, failure: false, success: true };
  expect(render(state, 'loading', 'failure', 'child')).toBe('child');
});

test('should return success when loading and not empty', () => {
  const state = { loading: true, failure: false, success: false };
  expect(render(state, 'loading', 'failure', 'child', false, 'empty')).toBe('child');
});
