'use strict';
jest.mock('../request');

import * as user from '../user';

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName('jiahwa').then(data => expect(data[0].email).toEqual('yujahua@163.com'));
});