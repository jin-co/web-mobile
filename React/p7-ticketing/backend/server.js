const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const app = express()
const port = process.env.PORT | 4000
const dbConnect = require('./config/db')
const { errorHandler } = require('./middleware/errorHandler')

dbConnect()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

app.use('/api/users', require('./routers/user.router'))

app.listen(port, () => console.log('server running' + port))
