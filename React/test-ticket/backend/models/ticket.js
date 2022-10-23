const mongoose = require('mongoose')
const ticketSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    product: {
      type: String,
      require: [true, 'Select a product'],
      enum: ['Phone', 'Max', 'Pad'],
    },
    description: {
      type: String,
      require: [true, 'Enter a description'],
    },
    status: {
      type: String,
      require: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamp: true,
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)
