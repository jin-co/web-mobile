import React from 'react'
import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_URL
const git = axios.create({
  baseURL: GITHUB_URL
})

export const searchUser = async (text) => {  
  const params = new URLSearchParams({
    q: text
  })
  // const res = await fetch(GITHUB_URL + `search/users?${params}`)
  // const { items } = await res.json()
  // return items  
  const res = await git.get(`search/users?${params}`)
  return res.data.items  
}

export const getBoth = async (login) => {
  const [user, repos] = await Promise.all([
    git.get(),
    git.get()
  ])
  return {user:user.data, repos:repos.data}
}

export const getUser = async (login) => {  
  // const res = await fetch(GITHUB_URL + `users/${login}`)
  const res = await git.get(`users/${login}`)
  if (res.status === 404) {
    window.location = '/notfound'
  } else {
    // return await res.json()    
    return await res.data
  }
}

export const getRepos = async (login) => {  
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10
  })
  // const res = await fetch(GITHUB_URL + `users/${login}/repos?${params}`)
  const res = await git.get(`users/${login}/repos?${params}`)
  return await res.data
}