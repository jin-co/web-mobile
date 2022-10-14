const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONG_KEY) 
  } catch (error) {
    
  }   
} 
module.exports = connectDB


