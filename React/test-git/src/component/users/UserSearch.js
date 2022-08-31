import React from 'react'
import { useContext, useState } from 'react'
import GitContext from '../../context/GitContext'
import { searchUsers } from '../../context/GitAction'
import AlertContext from '../../context/AlertContext'

const UserSearch = () => {
  const [text, setText] = useState('')
  const { users, dispatch } = useContext(GitContext)
  const { setAlert } = useContext(AlertContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Enter', 'error')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const userData = await searchUsers(e.target.value)
      dispatch({ type: 'GET_USERS', payload: userData })
    }
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
              value={text}
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
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => dispatch({ type: 'CLEAR_USER' })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
