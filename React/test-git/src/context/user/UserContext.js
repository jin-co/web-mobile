import React, { createContext, useEffect, useState, useReducer } from 'react'
import { UserReducer } from './UserReducer'

const UserContext = createContext()
const POST_URL = process.env.REACT_APP_POST

export const UserProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false
  }

  const [posts, setPosts] = useState([])

  const [state, dispatch] = useReducer(UserReducer, initialState)

  useEffect(() => {
    addPost()
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const res = await fetch(POST_URL)
    const data = await res.json()
    console.log(data)
  }

  const addPost = async () => {
    const newPost = {
      id: 2,
      title: 'Some!',
      author: "What"
    }
    await fetch(POST_URL + 2, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }      
    })
  }

  return (
    <UserContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
