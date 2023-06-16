import React, { useContext, useState } from 'react'
import GitContext from '../../context/git/GitContext'
import { getUsers } from '../../context/git/GitAction'
import AlertContext from '../../context/alert/AlertContext'

export const UserSearch = () => {
  const { users, dispatch } = useContext(GitContext)
  const { alertDispatch } = useContext(AlertContext)
  const [text, setText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text === '') {
      alertDispatch({
        type: 'ON'
      })

      setTimeout(() => {
        alertDispatch({
          type: 'OFF'
        })
      }, 2000)
    }

    const users = await getUsers(text)
    dispatch({
      type: 'GET_USERS',
      payload: users
    })
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search"
              onChange={handleChange}
              value={text}
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
          <button className="btn btn-ghost btn-lg" onClick={() => {
            dispatch({
              type: 'CLEAR_USERS',
            })
          }}>Clear</button>
        </div>
      )}
    </div>
  )
}
