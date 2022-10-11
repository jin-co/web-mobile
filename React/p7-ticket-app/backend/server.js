const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.PORT | 3000
const {errorHandler} = require('./middleware/error.middleware')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

app.use('/api/users', require('./routes/user.route'))

app.listen(PORT, () => console.log('server started' + PORT))
