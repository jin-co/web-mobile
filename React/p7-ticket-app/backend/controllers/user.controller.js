const asyncHandler = require('express-async-handler')

// @path /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('what!')
  }
})

// @path /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.send('hhhhhhh')
})

module.exports = {
  registerUser,
  loginUser,
}
