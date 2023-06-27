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

const addTicket = async (ticket, token) => {  
  const config = {
    headers: {
      authorization: 'Bearer ' + token
    }
  }
  console.log(ticket)
  const res = await axios.post(URL, ticket, config)  
  console.log(res)
  return res.data
}

const ticketService = {
  getTickets,
  addTicket
}

export default ticketService
