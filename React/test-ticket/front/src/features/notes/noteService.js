import axios from "axios";
const URL = 'http://localhost:5000/api/ticket/'

const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      authorization: 'Bearer ' + token
    }
  }

  const res = await axios.get(URL + ticketId + '/note/', config)
  return res.data
}

const addNote = async (ticketId, note, token) => {
  const config = {
    headers: {
      authorization: 'Bearer ' + token
    }
  }

  const res = await axios.post(URL + ticketId + '/note/', note, config)
  return res.data
}

const noteService = {
  getNotes,
  addNote
}

export default noteService