const asyncHandler = require('express-async-handler')
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new Error('all fields required')
  }
  res.status(400).json({
    email: req.body.email,
    password: req.body.password,
  })
})

exports.join = asyncHandler(async (req, res, next) => {

})