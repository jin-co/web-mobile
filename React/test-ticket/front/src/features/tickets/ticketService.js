import axios from 'axios'
const URL = 'http://localhost:5000/api/ticket/'

const createTicket = async (ticket, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`
    }
  }
  const res = await axios.post(URL, ticket, config)
  return res.data
}

const ticketService = {
  createTicket
}

export default ticketService

