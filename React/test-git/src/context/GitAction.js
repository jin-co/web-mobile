import axios from 'axios'

const GITHUB_URL = 'https://api.github.com/'

export const searchUsers = async (text) => {
  setLoading()
  const params = new URLSearchParams({
    q: text,
  })
  const res = await fetch(GITHUB_URL + `search/users?${params}`)
  const { items } = await res.json()
  return items
}

export const getUser = async (login) => {
  setLoading()
  const res = await fetch(GITHUB_URL + `users/${login}`)

  if (res.status === 404) {
    window.location = '/notfound'
  } else {
    const data = await res.json()    
    return data
  }
}

export const getRepos = async (login) => {
  setLoading()
  const params = new URLSearchParams({
    sort: 'create',
    per_page: 10,
  })
  const res = await fetch(GITHUB_URL + `users/${login}/repos?${params}`)

  const data = await res.json()  
  return data
}

// const setLoading = () => {
//   dispatch({
//     type: 'SET_LOADING',
//   })
// }

// const clearUser = () => {
//   dispatch({
//     type: 'CLEAR_USER',
//   })
// }
