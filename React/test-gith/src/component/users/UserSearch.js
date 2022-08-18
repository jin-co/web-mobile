import React from 'react'
import { useContext, useState } from 'react'
import GithubContext from '../../context/github/GithubContext'

const UserSearch = () => {
  const [text, setText] = useState('')
  const { users, searchUsers } = useContext(GithubContext)

  const handleSubmit = (e) => {
    if (text !== '') {
      searchUsers(e.target.value)
    } else {
    }
    setText('')
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="card">
      <form action="" className="mx-auto my-10" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <button className="px-10" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default UserSearch
