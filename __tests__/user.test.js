'use strict';
jest.mock('../test/request');

import * as user from '../test/user';

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName('jiahwa').then(data => expect(data).toEqual('yujahua@163.com'));
});