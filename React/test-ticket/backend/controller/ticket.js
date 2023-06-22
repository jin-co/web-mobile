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

})

exports.updateTicket = ah(async (req, res, next) => {

})