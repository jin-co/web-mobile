const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONG)
    console.log('connected'.blue.underline)
  } catch (error) {
    console.log('failed'.red.underline)
    process.exit(1)
  }
}

module.exports = connectDB