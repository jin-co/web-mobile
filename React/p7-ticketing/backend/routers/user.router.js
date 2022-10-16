const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const { register, login } = require('../controllers/user.controller')

router.post('/register', register)

router.post('/login', login)

module.exports = router
