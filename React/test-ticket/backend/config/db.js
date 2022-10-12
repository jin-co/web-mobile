const mongoose = require('mongoose')
const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONG)
  } catch {
    console.log('failed')
  }
}

module.exports = connectDB