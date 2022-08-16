import { createContext } from 'react'
import { useEffect, useReducer } from 'react'
import githubReducer from './GithubReducer'

const URL = 'https://api.github.com/'

const GithubContext = createContext()

export const GithubProvider = (props) => {  
  const initial = {
    users: [],
    loading: true
  }

  const [state, dispatch] = useReducer(githubReducer, initial)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await fetch(URL + 'users')
    const data = await res.json()

    dispatch({
      type: 'GET_USERS',
      payload: data
    })    
  }

  return (
    <GithubContext.Provider
      value={{
        users:state.users,
        loading:state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
