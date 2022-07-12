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
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const fetchUsers = async () => {    
    setLoading()
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
    const data = await res.json()
    // setUsers(data)
    // setIsLoading(false)
    dispatch({
      type: 'GET_USERS',
      payload: data,
    })
  }

  const setLoading = () => {
    dispatch({type: 'SET_LOADING'})
  }

  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.loading, fetchUsers }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
