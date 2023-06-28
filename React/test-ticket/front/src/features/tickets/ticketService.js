import axios from 'axios'
const URL = 'http://localhost:5000/api/ticket/'

const getTickets = async (token) => {
  const config = {
    headers: {
      authorization: 'Bearer ' + token
    }
  }
  const res = await axios.get(URL, config)
  return res.data
}

const getTicket = async (id, token) => {
  const config = {
    headers: {
      authorization: 'Bearer ' + token
    }
  }
  const res = await axios.get(URL + id, config)
  return res.data
}

const closeTicket = async (id, token) => {
  const config = {
    headers: {
      authorization: 'Bearer ' + token
    }
  }
  const res = await axios.put(URL + id, { status: 'closed' }, config)
  console.log(res.data)
  return res.data
}

const addTicket = async (ticket, token) => {
  const config = {
    headers: {
      authorization: 'Bearer ' + token
    }
  }
  const res = await axios.post(URL, ticket, config)
  return res.data
}

const ticketService = {
  getTickets,
  addTicket,
  getTicket,
  closeTicket
}

export default ticketService
