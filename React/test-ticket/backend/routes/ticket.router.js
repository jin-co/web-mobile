const express = require('express')
const router = express.Router()
const { getTickets, createTicket } = require('../controllers/ticket.controller')

const protect = require('../middleware/auth.middleware')

router.route('/').get(protect, getTickets).post(protect, createTicket)

module.exports = router
