var user = require('./user')
var token = require('./token')


module.exports = function(parent, options) {
    // mount the app
    parent.use(user)
    parent.use(token)
}