import axios from 'axios'

const API = '/api/tickets/'
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API + ticketId + '/notes', config)
  return response.data
}

const noteService = {
  getNotes,
}

export default noteService
