const express = require('express')
const app = express()
const port = process.env.PORT | 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routers/user.router'))

app.listen(port)
