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
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })
    const res = await fetch(URL + `users/${login}/repos?${params}`)
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
        ...state,
        dispatch,                
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
