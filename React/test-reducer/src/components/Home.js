import React from 'react'
import { useReducer } from 'react'
import { Reducer } from '../context/Reducer'

export const Home = () => {
  const initialState = { users: ['user1', 'user2', 'user3'] }

  const updateUser = () => {
    dispatch({
      type: 'UPDATE_USER',
      payload: ['user4', 'user5', 'user6']
    })
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <>
      <div className='container'>
        {
          state.users.map((u, index) => (
            <p key={index}> {u} </p>
          ))
        }
      </div>
      <button onClick={() => updateUser()}>Click</button>
    </>
  )
}
