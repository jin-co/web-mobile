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
