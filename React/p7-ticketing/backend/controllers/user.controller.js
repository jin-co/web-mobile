const asyncHandler = require('express-async-handler')
const bcryptjs = require('bcryptjs')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Field missing')
  }

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const salt = await bcryptjs.genSalt(10)
  const hashedPassword = await bcryptjs.hash(password, salt)
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
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid')
  }
  res('hh')
})

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await bcryptjs.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid credentials')
  }
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: '30d' })
}

const getMe = asyncHandler(async () => {
  res.send('me')
})

module.exports = {
  register,
  login,
  getMe,
}
