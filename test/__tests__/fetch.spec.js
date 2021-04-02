'use strict';
import * as fetch from '../fetch'

// The assertion for a promise must be returned.
test('the data is peanut butter', () => {
    return fetch.fetchData().then(data => {
      expect(data).toBe('peanut butter');
    })
  });