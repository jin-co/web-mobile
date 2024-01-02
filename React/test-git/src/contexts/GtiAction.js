import axios from 'axios'

const GITHUB_URL = 'https://api.github.com/'
const axiosURL = axios.create({
  baseURL: GITHUB_URL,
  headers: {}
})

export const getUsers = async (text) => {
  const res = axiosURL.get('search/users?q=' + text)    
  return res.data.items
}

export const getUser = async (text) => {
  const res = await fetch(GITHUB_URL + 'users/' + text)
  const data = await res.json()
  return data
}

export const getRepos = async (text) => {
  const params = new URLSearchParams({

  })
  const res = await fetch(GITHUB_URL + 'users/' + text + '/repos')
  const data = await res.json()
  return data
}