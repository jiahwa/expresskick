
/**
 * db
 * Sometime later will be replaced by mysql database
 */
var users = []
users.push({name: 'admin', seq: '01', email: 'yujiahua@csii.com.cn'})

var tokens = []
tokens.push({id: '00', createTime: '2021-01-28 15:23:50', ip: '192.168.0.1'})
tokens.push({id: '09', createTime: '2021-01-28 15:24:51', ip: '127.0.0.1'})

module.exports = {users, tokens}