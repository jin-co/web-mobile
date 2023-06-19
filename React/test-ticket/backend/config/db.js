const mongoose = require('mongoose')
mongoose.connect(process.env.MONG).then(() => console.log('connected')).catch(() => console.log('failed'))