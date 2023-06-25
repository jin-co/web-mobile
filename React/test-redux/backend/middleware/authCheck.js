const jwt = require('jsonwebtoken')
const ah = require('express-async-handler')

const authCheck = ah(async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, process.env.JWT)    
    req.user = decodedToken
    next()
  } catch (error) {
    res.status(400)
    throw new Error('Not Authorized')
  }
})

module.exports = authCheck