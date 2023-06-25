const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ah = require('express-async-handler')

exports.join = ah(async (req, res, next) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('All Required')
  }
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('Email Taken')
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
      token: jwt.sign({ id: user._id }, process.env.JWT, { expiresIn: '1h' }),
      ext: 3600,
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

exports.login = ah(async (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400)
    throw new Error('All Required')
  }

  const user = await User.findOne({ email: email })

  if (!user) {
    res.status(400)
    throw new Error('User Not Found')
  }

  const result = await bcrypt.compare(password, user.password)

  if (!result) {
    res.status(400)
    throw new Error('Wrong password')
  }

  res.status(200).json({
    _id: user._id,
    email: user.email,
    token: jwt.sign({ id: user._id }, process.env.JWT, { expiresIn: '1h' }),
    ext: 3600,
  })
})