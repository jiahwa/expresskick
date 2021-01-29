var http = require('http')
/**
 * 
 * @param {object} params {url, data}
 * @param {*} callback 
 */
module.exports = function request({url, data}, callback) {
    var defaults = {}
    var postData = Object.assign(defaults, data)
    
    var options = {
        hostname: 'localhost',
        port: 3000,
        path: url,
        method: 'POST' 
    }
    var req = http.request(options, res => {
        res.on('end', data => callback(data))
    })

    // write into request body
    req.write(postData)
    req.end()

    return req
}