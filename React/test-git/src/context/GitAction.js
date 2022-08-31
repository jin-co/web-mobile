import axios from 'axios'

const GITHUB_URL = 'https://api.github.com/'
const github = axios.create({
  baseURL: GITHUB_URL,
})

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })
  const res = await fetch(GITHUB_URL + `search/users?${params}`)
  const { items } = await res.json()
  return items
}

export const getUserAndRepo = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`users/${login}`),
    github.get(`users/${login}/repos`),
  ])
  return { user: user.data, repos: repos.data }
}
