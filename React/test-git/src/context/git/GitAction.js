const url = process.env.REACT_APP_URL

export const getUsers = async (text) => {
  const res = await fetch(url + `search/users?q=${text}`)
  const { items } = await res.json()
  return items
}

export const getUser = async (login) => {
  const res = await fetch(url + 'users/' + login)
  const data = await res.json()
  return data
}

export const getRepos = async (login) => {
  const res = await fetch(url + `users/${login}/repos`)
  const data = await res.json()
  return data
}