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

const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API + ticketId, config)

  return response.data
}

const closeTicket = async (ticketId, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API + ticketId, { status: 'closed' }, config)

  return response.data
}

const ticketService = {
  createTicket,
  getTickets,
  getTicket,
  closeTicket,
}

export default ticketService
