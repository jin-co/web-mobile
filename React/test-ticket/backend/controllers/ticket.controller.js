const asyncHandler = require('express-async-handler')
const User = require('../models/user')
const Ticket = require('../models/ticket')

const getTickets = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const tickets = await Ticket.find({ user: req.user.id })
  res.status(200).json(tickets)
})

const getTicket = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not authorized')
  }
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

const deleteTicket = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  await ticket.remove()

  res.status(200).json({ success: true })
})

const updateTicket = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedTicket)
})

module.exports = {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
}
