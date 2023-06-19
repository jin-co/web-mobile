const express = require('express')
const router = express.Router()
const { login, join } = require('../controller/user')
const errorCheck = require('../middleware/error-check')

router.post('/join', join)
router.post('/login', login)

module.exports = router