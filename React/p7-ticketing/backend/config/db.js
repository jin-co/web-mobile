const mongoose = require('mongoose')

const dbConnect = mongoose.connect(process.env.MONG_KEY)

module.exports = dbConnect
