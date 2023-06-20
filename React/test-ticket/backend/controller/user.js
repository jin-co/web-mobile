const asyncHandler = require('express-async-handler')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.join = asyncHandler(async (req, res, next) => {  
  const { name, email, password } = req.body
  if (!email || !password || !name) {
    res.status(400)
    throw new Error('all fields required')
  }
  const userExists = await User.findOne({ email })
  if (userExists) {
    console.log(userExists)
    res.status(400)
    throw new Error('user exists')
  }
  const salt = await bcryptjs.genSalt(10)
  const hashedPassword = await bcryptjs.hash(password, salt)
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if (!user) {
    res.status(400)
    throw new Error('join failed')
  }

  res.status(201).json({ user: user, token: generateToken(email) })
})

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new Error('all fields required')
  }

  const user = await User.findOne({ email })

  if (!user) {
    res.status(400)
    throw new Error('user not exists')
  }
  const result = await bcryptjs.compare(password, user.password)
  if (!result) {
    res.status(400)
    throw new Error('wrong password')
  }

  res.status(200).json({ user: user, token: generateToken(email) })
})

exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.userData.email })
  const resUser = {
    _id: user._id,
    name: user.name,
    email: user.email,
  }
  res.status(200).json({ user: resUser })
})

function generateToken(email) {
  return jwt.sign({ email: email }, process.env.JWT, { expiresIn: '1h' })
}