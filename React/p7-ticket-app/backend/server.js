const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.PORT | 3000

app.use(express.json())

app.get('/', (req, res, next) => {
  res.send('hh')
})

app.use('/api/users', require('./routes/user.route'))

app.listen(PORT, () => console.log('server started' + PORT))
