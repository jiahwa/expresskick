var user = require('./user')
var token = require('./token')
var CONTEXT = require('./context')

var server = function(parent, options) {
    // mount the app
    parent.use(user)
    parent.use(token)
}

module.exports = {
    server,
    CONTEXT
}