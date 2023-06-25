import axios from 'axios'
const URL = 'http://localhost:5000/api/user/'

const join = async (user) => {
  const res = await axios.post(URL + 'join', user)
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }
  return res.data
}

const login = async (user) => {
  const res = await axios.post(URL + 'login', user)
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }
  return res.data
}

const logout = async () => {
  localStorage.removeItem('user')
}

const authService = {
  join,
  login,
  logout
}

export default authService