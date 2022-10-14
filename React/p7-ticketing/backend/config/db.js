const mongoose = require('mongoose')
const connectDB = async () => {
   const conn = await mongoose.connect(process.env.MONG_KEY)
} 
module.exports = connectDB


