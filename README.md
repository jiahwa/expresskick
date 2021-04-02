Base on express platform, kick off one ball first

## Jest
Jest been imported for testing, coverage testing example below
```
hua-xiao-hua-2:expresskick yujiahua$ npm test

> expresskick@0.0.0 test /Users/yujiahua/GitHub/expresskick
> jest --coverage

 FAIL  __tests__/user-test.js
  ● works with promises

    TypeError: Cannot read property 'then' of undefined

      2 |
      3 | export function getUserName(userName) {
    > 4 |   return request('/api/users',{userName})
        |          ^
      5 |   .then(user => user instanceof Array && user.length > 0 ? user[0].email: user)
      6 |     .catch((error)=>console.error(error));
      7 | }

      at Object.getUserName (test/user.js:4:10)
      at Object.<anonymous>.it (__tests__/user-test.js:9:15)

  ● works with promises

    expect.assertions(1)

    Expected one assertion to be called but received zero assertion calls.

       6 | // The assertion for a promise must be returned.
       7 | it('works with promises', () => {
    >  8 |   expect.assertions(1);
         |          ^
       9 |   return user.getUserName('jiahwa').then(data => expect(data).toEqual('yujahua@163.com'));
      10 | });

      at Object.<anonymous>.it (__tests__/user-test.js:8:10)

 FAIL  __tests__/fetch-test.js
  ● the data is peanut butter

    Failed: "error"

      3 |
      4 | // The assertion for a promise must be returned.
    > 5 | test('the data is peanut butter', () => {
        | ^
      6 |     return fetch.fetchData().then(data => {
      7 |       expect(data).toBe('peanut butter');
      8 |     });

      at Env.it (node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:95:24)
      at Object.<anonymous> (__tests__/fetch-test.js:5:1)

------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------|---------|----------|---------|---------|-------------------
All files   |   17.65 |        0 |   27.27 |   14.29 |
 fetch.js   |     100 |      100 |     100 |     100 |
 request.js |       0 |        0 |       0 |       0 | 4-31
 user.js    |   33.33 |        0 |   33.33 |   33.33 | 5-6
------------|---------|----------|---------|---------|-------------------
Test Suites: 2 failed, 2 total
Tests:       2 failed, 1 passed, 3 total
Snapshots:   0 total
Time:        1.325 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
hua-xiao-hua-2:expresskick yujiahua$
```