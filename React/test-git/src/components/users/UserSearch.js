import React, { useContext, useState } from 'react'
import GitContext from '../../context/git/GitContext'

export const UserSearch = () => {
  const { getUsers, users, clearUser } = useContext(GitContext)
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    getUsers(text)
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
          <button className="btn btn-ghost btn-lg" onClick={() => clearUser()}>Clear</button>
        </div>
      )}
    </div>
  )
}
