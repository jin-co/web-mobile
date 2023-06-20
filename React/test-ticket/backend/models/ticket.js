const mongoose = require('mongoose')
const ticketSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    product: { type: String, require: true, enum: ['iPhone', 'Mac', 'PS4'] },
    status: { type: String, require: true, enum: ['new', 'open', 'closed'], default: 'new' }
  },
  { timestamps: true })

module.exports = mongoose.model('Ticket', ticketSchema) 