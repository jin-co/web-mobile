const asyncHandler = require('express-async-handler')
const Ticket = require('../models/ticket')
const User = require('../models/user')

exports.getTickets = asyncHandler(async (req, res, next) => {
  const user = User.findOne({ email })
  if (!user) {
    res.status(400)
    throw new Error('Go away')
  }
  const tickets = await Ticket.find({ user: req.userData.email })
  res.status(200).json(tickets)
})

exports.getTicket = asyncHandler(async (req, res, next) => {
  const user = User.findOne({ email })
  if (!user) {
    res.status(400)
    throw new Error('Go away')
  }
  const ticket = await Ticket.find({ user: req.userData.email, _id: req.params.id })
  res.status(200).json(ticket)
})

exports.deleteTicket = asyncHandler(async (req, res, next) => {
  const user = User.findOne({ email })
  if (!user) {
    res.status(400)
    throw new Error('Go away')
  }
  const ticket = await Ticket.find({ user: req.userData.email, _id: req.params.id })
  await ticket.remove()
  res.status(200).json('good')
})

exports.updateTicket = asyncHandler(async (req, res, next) => {
  const user = User.findOne({ email })
  if (!user) {
    res.status(400)
    throw new Error('Go away')
  }
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.status(200).json(ticket)
})

exports.addTicket = asyncHandler(async (req, res, next) => {
  const { product, description } = req.body
  if (!product || !description) {
    res.status(400)
    throw new Error('all needed')
  }
  const ticket = await Ticket.create({
    product,
    description,
    user: req.userData.email
  })
  res.status(201).json(ticket)
})