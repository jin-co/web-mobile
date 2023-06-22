const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT | 5000
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
require('./config/db')
const errorCheck = require('./middleware/errorCheck')

app.use('/api/user', require('./router/user'))
app.use('/api/ticket', require('./router/ticket'))
app.use(errorCheck)

app.listen(port, () => console.log(port))

