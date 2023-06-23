const express = require('express')
const router = express.Router()
const authCheck = require('../middleware/authCheck')
const {
  getTickets,
  getTicket,
  addTicket,
  removeTicket,
  updateTicket } = require('../controller/ticket')

router.use('/:id/note', require('./note'))

router.route('/').get(authCheck, getTickets).post(authCheck, addTicket)

router.route('/:id').get(authCheck, getTicket).delete(authCheck, removeTicket).put(authCheck, updateTicket)

module.exports = router