Base on express platform, kick off one ball first

## `TypeError: Cannot read property 'then' of undefined`
How to solve: 

In an async example, Jest been imported for testing, coverage testing example as below but fialed. ( [Complete errer log here, click me](./UNDEFINED.md) )
```
hua-xiao-hua-2:expresskick yujiahua$ npm test

> expresskick@0.0.0 test /Users/yujiahua/GitHub/expresskick
> jest --coverage

 FAIL  __tests__/user-test.js
  ● works with promises

    TypeError: Cannot read property 'then' of undefined
```

> Note: [`Manual mocks are defined by writing a module in a __mocks__/ subdirectory immediately adjacent to the module`](https://jestjs.io/docs/manual-mocks#mocking-user-modules), so put files in their proper place as examples blew in GOOD `to fix` test failed above.

`BAD`
```
.
├── __mocks__
├   └── request.js
├── __test__
├   └── request.test.js
├── test
├   └── request.js
├── node_modules
└── views
```
`GOOD`
```
.
├── config
├── __mocks__
├   └── fs.js
├── models
├   ├── __mocks__
│   │   └── request.js
├   ├── __test__
├   │   └── request.test.js
├   └── request.js
├── node_modules
└── views
```