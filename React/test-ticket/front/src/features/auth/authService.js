import axios from 'axios'
const URL = 'http://localhost:5000/api/user/'

const join = async(user) => {
  console.log(user)
  const res = await axios.post(URL + 'join', user)
  console.log(res)
  return res.data
}

const authService = {
  join
}

export default authService
