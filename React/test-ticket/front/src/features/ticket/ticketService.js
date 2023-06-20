import axios from 'axios'

const URL = 'http://localhost:5000/api/ticket/'

const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const res = await axios.post(URL, ticketData, config)
  return res.data
}

const ticketService = {
  createTicket
}

export default ticketService