const express = require('express')
const router = express.Router()
const { login, join, getMe } = require('../controller/user')
const errorCheck = require('../middleware/error-check')
const authCheck = require('../middleware/auth-check')

router.post('/join', join)
router.post('/login', login)
router.post('/me', authCheck, getMe)

module.exports = router