const jwt = require('jsonwebtoken')

const authCheck = (err, req, res, next) => {
  res.status(res.statusCode ? res.statusCode : 500)
  res.json({ 
    message: err.message, 
    stack: err.stack 
  })
}

module.exports = authCheck