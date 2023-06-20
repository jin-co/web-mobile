const express = require('express')
const router = express.Router()
const { getTickets, addTicket, getTicket, deleteTicket, updateTicket } = require('../controller/ticket')
const authCheck = require('../middleware/auth-check')

router.route('/').get(authCheck, getTickets).post(authCheck, addTicket)
router.route('/:id').get(authCheck, getTicket).delete(authCheck, deleteTicket).put(authCheck, updateTicket)

module.exports = router