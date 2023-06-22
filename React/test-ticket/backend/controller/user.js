const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.join = (req, res, next) => {
  const { name, email, password } = req.body
  if(!name || !email || !password) {
    res.status(400)
    throw new Error('All Required')
  }
}

exports.login = (req, res, next) => {
  const { name, email, password } = req.body
  if(!name || !email || !password) {
    res.status(400)
    throw new Error('All Required')
  }
}