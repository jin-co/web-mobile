const registerUser = (req, res, next) => {
  const {name, email, password} = req.body
  console.log(req.body)
  res.send('Register')
}

const loginUser = (req, res, next) => {
  res.send('Login')
}

module.exports = {
  registerUser,
  loginUser
}