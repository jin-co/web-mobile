const mongoose = require("mongoose")
const ticketSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    product: { type: String, required: true, enum: ['iPhone', 'Max', 'Pad'] },
    description: { type: String, required: true },
    status: { type: String, required: true, enum: ['new', 'pending', 'closed'], default: 'new' },
  },
  {
    timestamp: true
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)