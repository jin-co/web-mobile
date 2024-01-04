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

export const getUserRepos = async (text) => {
  const [user, repos] = await Promise.all([
    axiosURL.get(`users/${text}`),
    axiosURL.get(`users/${text}/repos`)
  ])
  console.log(user, repos)
  return { user: user.data, repos: repos.data }
}