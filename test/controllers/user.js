var request = require('./request')
var logger = require('morgan')

function getUserName(userName) {
    return request({url: '/users', data:  {userName}}, res => {
        logger(`userName is ${res.name}, email is ${res.email}`)
    })
}

module.exports = {getUserName}