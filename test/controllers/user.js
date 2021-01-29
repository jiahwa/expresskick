var request = require('./request')
var logger = require('morgan')

function getUserName(userID) {
    return request({url: '/users', data:  {userID}}, res => {
        logger(`UserID is ${res.id}, email is ${res.createTime}`)
    })
}

module.exports = {getUserName}