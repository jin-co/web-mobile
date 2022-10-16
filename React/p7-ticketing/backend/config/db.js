const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONG_KEY) 
    console.log('DB connected')
  } catch (error) {
    console.log('DB connection failed')
    process.exit(1)
  }   
} 
module.exports = connectDB


