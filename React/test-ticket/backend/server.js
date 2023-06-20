const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const errorCheck = require('./middleware/error-check')
require('dotenv').config()
const db = require('./config/db')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/users', require('./routes/user.js'))
app.use('/api/ticket', require('./routes/ticket.js'))
app.use(errorCheck)

app.listen(port)