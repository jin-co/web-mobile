import axios from 'axios'

const URL = process.env.REACT_APP_URL

const git = axios.create({
  baseURL: URL
})

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text
  })
  const res = await git.get(`search/users?${params}`)
  return res.data.items
}

export const getUser = async (login) => {
  const res = await git.get(`users/${login}`)
  if (res.status == 404) {
    window.location = '/notfound'
  } else {
    return res.data
  }
}

export const getRepos = async (login) => {
  const res = await git.get(`users/${login}/repos`)
  return res.data
}