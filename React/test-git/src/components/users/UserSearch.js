import React, { useContext, useState } from 'react'
import UserContext from '../../context/user/UserContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers, clearUser } from '../../context/user/UserAction'

export const UserSearch = () => {
  const { users, dispatch } = useContext(UserContext)
  const { alertDispatch } = useContext(AlertContext)
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text == '') {
      alertDispatch({
        type: 'SET'
      })
    } else {
      dispatch({
        type: 'SET_LOADING',
        isLoading: true
      })
      const users = await searchUsers(text)
      console.log(users)
      dispatch({
        type: 'GET_USERS',
        payload: users
      })
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form className="form-control" onSubmit={handleSubmit} >
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={() => dispatch({
            type: 'CLEAR_USERS'
          })}>Clear</button>
        </div>
      )}
    </div>
  )
}
