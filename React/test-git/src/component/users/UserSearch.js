import React from 'react'
import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

const UserSearch = () => {
  const [text, setText] = useState('')
  const { users, searchUsers } = useContext(GithubContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      // todo
    } else {
      searchUsers(text)
    }
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="grid">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
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
                className="absolute right-0 top-0 btn btn-lg rounded-l-none"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>      
      {        
        users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
