const fs = require('fs')
const path  = require('path')
const morgan = require('morgan')

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
const logger = (app) => {
    // setup dev option
    app.use(morgan('dev'));
    // setup combined option, log all request in the Apache combined format
    app.use(morgan('combined', { stream: accessLogStream }))
}

module.exports ={
    logger
}