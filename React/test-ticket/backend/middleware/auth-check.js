const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const authCheck = asyncHandler(async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, process.env.JWT)
    req.userData = decodedToken
    next()    
  } catch (error) {
    res.status(401)
    throw new Error('not authorized')
  }
})

module.exports = authCheck