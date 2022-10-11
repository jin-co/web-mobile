import React from 'react'

export const searchUsers = async (login) => {
  console.log(login)
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
  dispatch({
    type: 'SEARCH_USER',
    payload: data,
  })
}

export const getRepos = async (text) => {
  const param = new URLSearchParams({
    sort: 'created',
    per_page: 10
  })
  const res = await fetch(URL + `users/${text}/repos?${param}`)
  const data = await res.json()
  dispatch({
    type:'GET_REPOS',
    payload: data
  })    
}

export const clearResult = () => {
  dispatch({
    type: 'CLEAR',
  })
}