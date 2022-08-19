import React from 'react'

const URL = 'https://api.github.com/'

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })
  
  const res = await fetch(URL + `search/users?${params}`, {
    method: 'GET',
  })
  const { items } = await res.json()

  return items
}

export const searchUser = async (login) => {
  console.log('search user: ', login)
  const res = await fetch(URL + `users/${login}`, {
    method: 'GET',
  })
  if (res.status === 404) {
    window.location = '/notfound'
  } else {
    const data = await res.json()

    return data
  }
}

export const getRepos = async (text) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })
  const res = await fetch(URL + `users/${text}/repos?${params}`, {
    method: 'GET',
  })
  const data = await res.json()

  return data
}
