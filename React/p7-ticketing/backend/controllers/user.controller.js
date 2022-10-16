const asyncHandler = require('express-async-handler')

const register = asyncHandler(async (req, res, next) => {
  res('hh')
})

const login = asyncHandler(async (req, res, next) => {
  res('hh')
})

module.exports = {
  register,
  login
}