const User = require('../model/user')
const Ticket = require('../model/ticket')
const Note = require('../model/note')
const ah = require('express-async-handler')

exports.getNotes = ah(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(400)
    throw new Error('Not Authorized')
  }

  const ticket = await Ticket.find({ user: user._id })
  if (!ticket) {
    res.status(400)
    throw new Error('No Tickets')
  }

  const notes = await Note.find({ ticket: req.params.id })
  res.status(200).json(notes)
})

exports.addNote = ah(async (req, res, next) => {
  const { text } = req.body
  if (!text) {
    res.status(400)
    throw new Error('All Required')
  }

  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(400)
    throw new Error('Not Authorized')
  }

  const ticket = await Ticket.find({ user: user._id, _id: req.params.id })
  if (!ticket) {
    res.status(400)
    throw new Error('No Tickets')
  }

  const noteAdded = await Note.create({
    user: user._id,
    ticket: req.params.id,
    text,
  })

  if (!noteAdded) {
    res.status(400)
    throw new Error('Adding Note Failed')
  }

  res.status(201).json(noteAdded)
})

exports.updateNote = ah(async (req, res, next) => {
  const { text } = req.body

  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(400)
    throw new Error('Not Authorized')
  }

  const ticket = await Ticket.find({ user: user._id })
  if (!ticket) {
    res.status(400)
    throw new Error('Ticket Not Found')
  }

  const updated = await Note.updateOne({ _id: req.params.noteId },
    req.body
    , { new: true })
  res.status(200).json('updated')
})

exports.deleteNote = ah(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(400)
    throw new Error('Not Authorized')
  }

  const ticket = await Ticket.find({ user: user._id })
  if (!ticket) {
    res.status(400)
    throw new Error('Ticket Not Found')
  }

  try {
    await Note.deleteOne({ ticket: req.params.id, _id: req.params.noteId })
    res.status(200).json('Note Deleted')
  } catch (error) {
    res.status(400)
    throw new Error('Delete Failed')
  }
})