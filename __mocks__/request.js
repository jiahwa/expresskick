var db = require('../db')

module.exports = function request(url) {
    return () => {
        var userID = parseInt(url.substr('/users'.length),10)
        process.nextTick(() => {
            db.users[userID]
            ? resolve(db.users[userID])
            : reject({
                error: `User with id ${userID} not found`,
            })
        })
    }
}