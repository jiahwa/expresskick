'use strict';
import * as fetch from '../test/fetch'

// The assertion for a promise must be returned.
test('the data is peanut butter', () => {
    return fetch.fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });
// Testing for async errors using Promise.catch.
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetch.fetchData().catch(e => expect(e).toMatch('error'));
});