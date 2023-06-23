const User = require('../model/user')
const Ticket = require('../model/ticket')
const ah = require('express-async-handler')

exports.getTickets = ah(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(400)
    throw new Error('User Not Found')
  }

  const tickets = await Ticket.find({ user: user.id })
  res.status(200).json(tickets)
})

exports.getTicket = ah(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(400)
    throw new Error('User Not Found')
  }

  const ticket = await Ticket.findOne({ user: user.id, _id: req.params.id })

  if (!ticket) {
    res.status(400)
    throw new Error('Ticket Not Found')
  }

  res.status(200).json(ticket)
})

exports.addTicket = ah(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(400)
    throw new Error('User Not Found')
  }

  const { product, description } = req.body
  if (!product || !description) {
    res.status(400)
    throw new Error('All Required')
  }

  const ticket = await Ticket.create({
    user: user.id,
    product: product,
    description: description,
  })
  res.status(201).json(ticket)
})

exports.removeTicket = ah(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(400)
    throw new Error('User Not Found')
  }

  const ticket = await Ticket.findById(req.params.id)
  if (!ticket) {
    res.status(400)
    throw new Error('Ticket Not Found')
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(400)
    throw new Error('Not Your Ticket')
  }
  await Ticket.deleteOne({ _id: req.params.id })
  res.status(200).json('deleted')
})

exports.updateTicket = ah(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(400)
    throw new Error('User Not Found')
  }

  const ticket = await Ticket.findById(req.params.id)
  if (!ticket) {
    res.status(400)
    throw new Error('Ticket Not Found')
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(400)
    throw new Error('Not Your Ticket')
  }

  const updated = await Ticket.updateOne({_id: req.params.id}, req.body, { new: true })

  res.status(200).json('updated')
})