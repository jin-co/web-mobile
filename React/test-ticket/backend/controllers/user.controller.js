const registerUser = (req, res, next) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('include all the fields')
  }
  console.log(req.body)
  res.send('Register')
}

const loginUser = (req, res, next) => {
  res.send('Login')
}

module.exports = {
  registerUser,
  loginUser,
}
