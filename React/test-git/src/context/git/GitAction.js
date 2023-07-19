import axios from "axios"

const url = process.env.REACT_APP_URL
const base = axios.create({
  baseURL: url
})

export const getUsers = async (text) => {
  const res = await fetch(url + 'search/users?q=' + text)
  const { items } = await res.json()
  return items
}

export const getThem = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10
  })

  const [user, repos] = await Promise.all([
    base.get(`users/${login}`),
    base.get(`users/${login}/repos?${params}`),
  ])
  
  return await {
    user: user.data,
    repos: repos.data
  }
}