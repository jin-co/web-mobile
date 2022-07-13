import { createContext, useReducer } from 'react'
// import { useState } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = (props) => {
  // const [users, setUsers] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  // const fetchUsers = async () => {
  //   setLoading()
  //   const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
  //   const data = await res.json()
  //   // setUsers(data)
  //   // setIsLoading(false)
  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: data,
  //   })
  // }

  const searchUsers = async (text) => {
    setLoading()
    const params = new URLSearchParams({
      q: text,
    })
    const res = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`
    )
    const { items } = await res.json()
    // setUsers(data)
    // setIsLoading(false)
    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  const getUserRepos = async (login) => {
    setLoading()
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    })
    const res = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?${login}/repos/?${params}`
    )
    const data = await res.json()
    // setUsers(data)
    // setIsLoading(false)
    dispatch({
      type: 'GET_REPOS',
      payload: data,
    })
  }

  const getUser = async (login) => {
    setLoading()
    const res = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users?${login}`
    )

    if (res.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()
      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  const clearUsers = () => {
    dispatch({ type: 'CLEAR_USERS' })
  }

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
