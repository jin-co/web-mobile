const asyncHandler = require('express-async-handler')
const User = require('../models/user')
const Ticket = require('../models/ticket')

const getTickets = asyncHandler(async (req, res, next) => {
  res.status(200).json({'me' :'get message'})
})

const createTicket = asyncHandler(async (req, res, next) => {
  res.status(200).json({'me' :'get message'})
})

module.exports = {
  getTickets,
  createTicket,
}
