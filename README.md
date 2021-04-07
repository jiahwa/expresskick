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
├── models
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

## Project setup
```
npm install
```

### Start node serve, visit via `localhost:3000`
```
npm start
```

## Jest mock testing
If you've started the node server, `Jest mock` ( [user.test.js, line 2](./test/__tests__/user.test.js) ) won't work yet.

```
npm test
```

## Mongodb install
```sh
# - Windows system
cd myproject
npm install mongodb --save

# 1.Download the right MongoDB version from MongoDB
# 2.Create a database directory (in this case under /data, eg: Enter dictionary path `C:\Program Files\MongoDB\Server\4.4\data`, use command `mongod.exe --dbpath=..\data\db` in windows).
# visit your browser,enter: http://localhost:27017, if you get some information as below, it works well:
#
#   `It looks like you are trying to access MongoDB over HTTP on the native driver port.`
#
# 3.Install and start a mongod process.
# 4. Auto start and close Mongodb serve
# Write two lines code into new file /mongo.config at mongodb root, eg: C:\Program Files\MongoDB\Server\4.4\mongo.config
#
#   `dbpath=G:\mongodb\data\db
#   logpath=G:\mongodb\data\log\mongo.log`
#
# Enter mongodb root dictionary, use command: 

mongod -dbpath ".\data\db" -logpath ".\data\log\mongo.log" -install -serviceName "MongoDB"

# 5. Start and close,

net start MongoDB
net stop MongoDB

# More details [open the mongodb website](http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/)

mongod --dbpath=/data

# You should see the mongod process start up and print some status information.
#
# - MacOS system
#
```
