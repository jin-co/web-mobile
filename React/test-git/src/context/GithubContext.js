import { createContext } from 'react'
import { useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = (props) => {
  const initial = {
    users: [],
    repos: [],
    user: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initial)
  
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,                        
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
