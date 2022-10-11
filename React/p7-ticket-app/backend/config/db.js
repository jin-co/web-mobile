const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONG_KEY)
    console.log('connected'.cyan.underline)
  } catch (error) {
    console.log('err'.red.underline.bold)
    process.exit(1)
  }
}

module.exports = connectDB
