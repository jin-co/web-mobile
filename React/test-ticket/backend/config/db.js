const mongoose = require('mongoose')
const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONG)
    console.log('connected')
  } catch {
    console.log('failed')
  }
}

module.exports = connectDB
