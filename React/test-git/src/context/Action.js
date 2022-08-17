import React from 'react'

const URL = 'https://api.github.com/'

export const getUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })
  const res = await fetch(URL + `search/users?${params}`)
  const { items } = await res.json()

  return items
}

export const getUser = async (login) => {
  const res = await fetch(URL + `users/${login}`)
  if (res.status === 404) {
    window.location = '/notfound'
  } else {
    const data = await res.json()
    return data
  }
}

export const getRepos = async (login) => {  
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })
  const res = await fetch(URL + `users/${login}/repos?${params}`)
  const data = await res.json()
  return data  
}
