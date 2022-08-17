import { createContext } from 'react'
import { useEffect, useReducer } from 'react'
import githubReducer from './GithubReducer'

const URL = 'https://api.github.com/'

const GithubContext = createContext()

export const GithubProvider = (props) => {
  const initial = {
    users: [],
    repos: [],
    user: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initial)

  const getUsers = async (text) => {
    setLoadind()
    const params = new URLSearchParams({
      q: text,
    })
    const res = await fetch(URL + `search/users?${params}`)
    const { items } = await res.json()

    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  const getUser = async (login) => {
    setLoadind()
    const res = await fetch(URL + `users/${login}`)
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

  const getRepos = async (login) => {
    setLoadind()
    const res = await fetch(URL + `users/${login}/repos`)
    const data = await res.json()

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    })
  }

  const setLoadind = () => {
    dispatch({
      type: 'SET_LOADING',
    })
  }

  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        getUsers,
        getUser,
        getRepos,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
