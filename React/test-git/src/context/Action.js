import React from 'react'
import axios from 'axios'

const URL = 'https://api.github.com/'
const github = axios.create({
  baseURL: URL,
})

export const getUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })
  const res = await github.get(`search/users?${params}`)    
  return res.data.items
}

export const getAll = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })

  const [user, repos] = await Promise.all([
    github.get(`users/${login}`),
    github.get(`users/${login}/repos?${params}`),
  ])

  return { user: user.data, repos: repos.data }
}