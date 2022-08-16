import { createContext } from 'react'
import { useEffect, useReducer } from 'react'
import githubReducer from './GithubReducer'

const URL = 'https://api.github.com/'

const GithubContext = createContext()

export const GithubProvider = (props) => {
  const initial = {
    users: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initial)  

  const getUsers = async (text) => {
    setLoadind()
    const params = new URLSearchParams ({
      q: text
    })
    const res = await fetch(URL + `search/users?${params}`)
    const {items} = await res.json()

    dispatch({
      type: 'GET_USERS',
      payload: items,
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
        loading: state.loading,
        getUsers,
        clearUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
