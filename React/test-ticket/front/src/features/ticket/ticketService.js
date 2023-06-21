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

const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const res = await axios.get(URL, config)
  return res.data
}

const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const res = await axios.get(URL + ticketId, config)
  return res.data
}

const closeTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const res = await axios.put(URL + ticketId, { status: 'closed' }, config)
  return res.data
}

const ticketService = {
  createTicket,
  getTickets,
  getTicket,
  closeTicket
}

export default ticketService