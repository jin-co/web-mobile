import React from 'react'

const URL = 'https://api.github.com/'

export const searchUsers = async (login) => {  
  const params = new URLSearchParams({
    q: login,
  })
  const res = await fetch(URL + `search/users?${params}`)
  const data = await res.json()
  return data  
}

export const searchUser = async (id) => {
  const res = await fetch(URL + `users/${id}`)
  const data = await res.json()
  return data  
}

export const getRepos = async (text) => {
  const param = new URLSearchParams({
    sort: 'created',
    per_page: 10
  })
  const res = await fetch(URL + `users/${text}/repos?${param}`)
  const data = await res.json()
  return data  
}