var request = require('./request')
var logger = require('morgan')

function getToken() {
    return request({url: '/getToken'}, res => {
        logger(`Token is ${res.id}, createTime is ${res.createTime}`)
    })
}

module.exports = {getToken}