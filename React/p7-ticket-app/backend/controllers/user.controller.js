// @path /api/users/register
const registerUser = (req, res) => {
  const {name, email, password} = req.body
  if(!name || !email || !password) {
    res.status(400)
    throw new Error('what!')
  }

}

// @path /api/users/login
const loginUser = (req, res) => {
  res.send('hhhhhhh')
}

module.exports = {
  registerUser,
  loginUser,
}
