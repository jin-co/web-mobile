const GITHUB_URL = 'https://api.github.com/'

export const getUsers = async (text) => {
  console.log(text)
  const res = await fetch(GITHUB_URL + 'search/users?q=' + text)
  const data = await res.json()
  console.log(data.items)
  return data
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