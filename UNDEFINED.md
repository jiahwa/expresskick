## `TypeError: Cannot read property 'then' of undefined`
[Back](./README.md)

```
hua-xiao-hua-2:expresskick yujiahua$ npm test

> expresskick@0.0.0 test /Users/yujiahua/GitHub/expresskick
> jest --coverage

 FAIL  __tests__/user.test.js
  ● works with promises

    TypeError: Cannot read property 'then' of undefined

      2 |
      3 | export function getUserName(userName) {
    > 4 |   return request('/api/users',{userName})
        |          ^
      5 |   .then(user => user)
      6 | }

      at Object.getUserName (test/user.js:4:10)
      at Object.<anonymous>.it (__tests__/user.test.js:9:15)

  ● works with promises

    expect.assertions(1)

    Expected one assertion to be called but received zero assertion calls.

       6 | // The assertion for a promise must be returned.
       7 | it('works with promises', () => {
    >  8 |   expect.assertions(1);
         |          ^
       9 |   return user.getUserName('jiahwa').then(data => expect(data[0].email).toEqual('yujahua@163.com'));
      10 | });

      at Object.<anonymous>.it (__tests__/user.test.js:8:10)

 PASS  __tests__/fetch.spec.js
------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------|---------|----------|---------|---------|-------------------
All files   |   21.43 |      100 |   33.33 |   18.18 |
 fetch.js   |     100 |      100 |     100 |     100 |
 request.js |       0 |      100 |       0 |       0 | 4-26
 user.js    |      50 |      100 |      50 |      50 | 5
------------|---------|----------|---------|---------|-------------------

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        0.952 s, estimated 1 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```