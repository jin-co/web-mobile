const express = require('express')
const doteve = require('dotenv').config()
const app = express()
const PORT = process.env.PORT | 5000

app.get('/', (req, res, next) => {
  res.send('hh')
})

app.listen(PORT, () => console.log('server started' + PORT))