const asyncHandler = require('express-async-handler')
const User = require('../models/user')
const Ticket = require('../models/ticket')

const getTickets = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.find({ user: req.user.id })
  res.status(200).json(ticket)
})

const createTicket = asyncHandler(async (req, res, next) => {
  const { product, description } = req.body
  if (!product || !description) {
    res.status(400)
    throw new Error('Add a product and description')
  }

  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: 'new',
  })

  res.status(201).json(ticket)
})

module.exports = {
  getTickets,
  createTicket,
}
