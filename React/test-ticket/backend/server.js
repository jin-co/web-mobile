const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT | 5000
const errorHandler = require('./middleware/error.middleware')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(errorHandler)

app.get('', (req, res, next) => {
  res.json('hello')
})

app.use('/api/users', require('./routes/user.router'))

app.listen(port, () => console.log('server running ' + port))
