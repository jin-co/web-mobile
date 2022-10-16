const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const { register, login, getMe } = require('../controllers/user.controller')
const { protect } = require('../middleware/auth.middleware')

router.post('/register', register)
router.post('/login', login)
router.post('/me', protect, getMe)

module.exports = router
