import axios from 'axios'
const URL = 'http://localhost:5000/api/ticket/'

const getTickets = async (token) => {
  console.log(token)
  const config = {
    headers: {
      authorization: 'Bearer ' + token
    }
  }
  const res = await axios.get(URL, config)
  console.log(res)
  return res.data
}

const ticketService = {
  getTickets
}

export default ticketService
