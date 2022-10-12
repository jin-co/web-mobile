const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT | 3000
const connectDB = require('./config/db')
connectDB()

app.use('/api/users', require('./routers/user'))
app.listen(port)
module.exports = app
