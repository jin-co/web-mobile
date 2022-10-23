import axios from 'axios'

const API = '/api/users/'

const register = async (userData) => {
  const response = await axios.post(API, userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const login = async (userData) => {
  const response = await axios.post(API + 'login', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const logout = () => localStorage.removeItem('user')

const authService = {
  register,
  logout,
}

export default authService
