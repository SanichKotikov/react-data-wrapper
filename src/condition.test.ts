import condition from './condition';

function reload() {
  return Promise.resolve();
}

test('should return null', () => {
  const state = { loading: false, failure: false, success: false };
  expect(condition(state, 'loading', () => 'failure', 'child', reload)).toBeNull();
});

test('should return loading', () => {
  const state = { loading: true, failure: false, success: false };
  expect(condition(state, 'loading', () => 'failure', 'child', reload)).toBe('loading');
  expect(condition(state, 'loading', () => 'failure', 'child', reload, true, 'empty')).toBe('loading');
});

test('should return failure', () => {
  const state = { loading: false, failure: true, success: false };
  expect(condition(state, 'loading', () => 'failure', 'child', reload)).toBe('failure');
  expect(condition(state, 'loading', () => 'failure', 'child', reload, true, 'empty')).toBe('failure');
});

test('should return empty', () => {
  const state = { loading: false, failure: false, success: true };
  expect(condition(state, 'loading', () => 'failure', 'child', reload, true, 'empty')).toBe('empty');
});

test('should return success', () => {
  const state = { loading: false, failure: false, success: true };
  expect(condition(state, 'loading', () => 'failure', 'child', reload)).toBe('child');
});

test('should return success when loading and not empty', () => {
  const state = { loading: true, failure: false, success: false };
  expect(condition(state, 'loading', () => 'failure', 'child', reload, false, 'empty')).toBe('child');
});
