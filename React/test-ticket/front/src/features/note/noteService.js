import axios from 'axios'
const URL = 'http://localhost:5000/api/ticket/'

const getNotes = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const res = await axios.get(URL + id + '/note', config)
  return res.data
}

const createNote = async (noteText, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const res = await axios.post(URL + ticketId + '/note', { text: noteText }, config)
  return res.data
}

const noteService = {
  getNotes,
  createNote
}

export default noteService