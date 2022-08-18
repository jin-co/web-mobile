import React from 'react'
import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

const UserSearch = () => {
  const {users, searchUsers} = useContext(GithubContext)

  const handleSubmit = (e) => {
    
  }

  const handleChange = (e) => {

  }

  return (
    <div className='card'>
    <form action="" className='mx-auto my-10' onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type='submit'>Search</button>
    </form>
    </div>
  )
}

export default UserSearch