import React from 'react'
import GitContext from '../../context/github/GitContext'
import { useContext, useState } from 'react'

const UserSearch = () => {
  const [text, setText] = useState('')
  const { searchUsers } = useContext(GitContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(text)
    searchUsers(e.target.value)
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
      <div>
        <button className='btn btn-ghost btn-lg'>Clear</button>
      </div>
    </div>
  )
}

export default UserSearch
