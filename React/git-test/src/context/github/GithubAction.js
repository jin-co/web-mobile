import axios from 'axios'
const GITHUB_URL = 'https://api.github.com/'
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {},
})

export const searchUserAndRepos = async (text) => {
  const [user, repos] = await Promise.all([
    github.get(`users/${text}`),
    github.get(`users/${text}/repos`),
  ])

  return { user: user.data, repos: repos.data }
}

export const getUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const res = await github.get(`search/users?${params}`)
  return res.data.items
}