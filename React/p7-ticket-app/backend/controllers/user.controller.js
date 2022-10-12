const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

// @path /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('what!')
  }

  const userExists = await User.findOne({ email: email })
  if (userExists) {
    res.status(400)
    throw new Error('User exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid')
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
