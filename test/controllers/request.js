var http = require('http')

module.exports = function request(userID) {
    var options = {
        hostname: 'localhost',
        port: 3000,
        path: '/users',
        method: 'POST' 
    }
    var postData = { userID }
    var req = http.request(options, res => {
        res.on('data', data => data)
    })

    // write into request body
    req.write(postData)
    req.end()

    return req
}