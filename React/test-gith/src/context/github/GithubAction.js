import React from 'react'
import axios from 'axios'

const URL = 'https://api.github.com/'

const git = axios.create({
  baseURL: URL
})

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })
  
  const res = await git.get(URL + `search/users?${params}`)  
  return res.data.items
}

export const getAll = async(login) => {
  const [user, repos] = await Promise.all([
    git.get(`users/${login}`),
    git.get(`users/${login}/repos`),
  ])  
  return {user:user.data, repos:repos.data}
}
