const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const { signUP, login } = require('../controllers/user.controller')

router.use('/signup', signUP)

router.use('/login', login)

module.exports = router
