/**
 * Module dependencies
 */
var express = require('express');
var app = express()

var CONTEXT = require('../context')

// database
var {users} = require('../../db')

// middleware

/**
 * [post] method 
 * /api/users
 * 
 * example: http://localhost:3000/api/users
 */
app.post(`${CONTEXT}/users`, function(req, res, next){
  var user = users.filter(u => u.name === req.query.userName)
  res.send(user);
});
module.exports = app