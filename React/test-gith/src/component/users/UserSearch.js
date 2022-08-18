import React from 'react'
import { useContext, useState } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

const UserSearch = () => {
  const [text, setText] = useState('')
  const { users, searchUsers, clearUsers } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text !== '') {
      searchUsers(text)
    } else {
      console.log('set alert fired')
      setAlert('Enter', 'error')
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
      {users.length > 0 && <button onClick={() => clearUsers()}>Clear</button>}
    </div>
  )
}

export default UserSearch
