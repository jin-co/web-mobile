const registerUser = (req, res) => {
  res.status(200).json('good')
}

const loginUser = (req, res) => {
  res.status(200).json('good login')
}

module.exports = {
  registerUser,
  loginUser,
}
