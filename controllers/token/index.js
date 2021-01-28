/**
 * Module dependencies
 */
var express = require('express');
var app = express()

var CONTEXT = require('../context')

// database
var {tokens} = require('./db')

// middleware


/**
 * [get] method 
 * /api/getToken
 * 
 * example: http://localhost:3000/api/users/?api-key=foo
 */

app.get(`${CONTEXT}/getToken`, function(req, res, next){
  res.send(tokens);
});

module.exports = app