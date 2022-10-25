import axios from 'axios'
const API = '/api/tickets/'

const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API, ticketData, config)

  return response.data
}

const getTickets = async (token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API, config)

  return response.data
}

const ticketService = {
  createTicket,
  getTickets,
}

export default ticketService
