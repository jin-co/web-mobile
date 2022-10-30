const mongoose = require('mongoose')
const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: String,
      required: [true, 'Select a product'],
      enum: ['Phone', 'Max', 'Pad'],
    },
    description: {
      type: String,
      required: [true, 'Enter a description'],
    },
    status: {
      type: String,
      require: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)
