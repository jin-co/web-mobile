const User = require('../models/user')
const Note = require('../models/note')
const asyncHandler = require('express-async-handler')
exports.getNotes = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.useData.email)
  if (!user) {
    res.status(400)
    throw new Error('Not found')
  }

  const ticket = await Ticket.findById(req.params.ticketId)
  const note = await Note.find({ ticket: req.params.ticketId })
  res.status(200).json(note)
})

exports.addNote = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.useData.email)
  if (!user) {
    res.status(400)
    throw new Error('Not found')
  }

  const ticket = await Ticket.findById(req.params.ticketId)
  const note = await Note.create({
    text: req.body.text,
    isStaff: false,
    user: req.userData.email,
    ticket: req.params.ticketId
  })
  res.status(200).json(note)
})