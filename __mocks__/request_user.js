var db = require('../db')

module.exports = function request(params, callback) {
    return () => {
        var userName = params.data.userName
        process.nextTick(() => {
            var res = db.users.filter(user => user.name === userName)

            res.length > 0 
            ? callback(res)
            : new Error({
                error: `User with name ${userName} not found`,
            })
        })
    }
}