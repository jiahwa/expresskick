var request = require('./request')
var logger = require('morgan')

function getUserName(userID) {
    return request(userID, res => {
        logger(`Res data is ${res.id}, createTime is: ${res.createTime}`)
    })
}

module.exports = {getUserName}