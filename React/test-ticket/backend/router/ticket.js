const express = require('express')
const router = express.Router()
router.use('/:ticketId/note', require('./note'))

module.exports = router