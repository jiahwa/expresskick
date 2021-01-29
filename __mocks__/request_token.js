var db = require('../db')

module.exports = function request({}, callback) {
    return () => {
        process.nextTick(() => {
            var res = db.tokens.sort((a,b) => a.id > b.id)

            res.length > 0
            ? callback(res.slice(-1))
            : new Error({
                error: `Token not found`,
            })
        })
    }
}