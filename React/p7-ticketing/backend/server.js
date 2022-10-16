const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT | 3000
const dbConnect = require('./config/db')

// dbConnect()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routers/user.router'))

app.listen(port, () => console.log('server running' + port))
