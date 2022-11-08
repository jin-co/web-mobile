const express = require('express')
const router = express.Router()
const protect = require('../middleware/auth.middleware')
const noteRouter = require('./note.router')
router.use('/:ticketId/notes', noteRouter)
const {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
} = require('../controllers/ticket.controller')

router.route('/').get(protect, getTickets).post(protect, createTicket)

router
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket)

module.exports = router