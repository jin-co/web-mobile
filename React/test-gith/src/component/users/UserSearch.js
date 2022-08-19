import React from 'react'
import { useContext, useState } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubAction'

const UserSearch = () => {
  const [text, setText] = useState('')
  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text !== '') {
      dispatch({type:'SET_LOADING'})
      const userData = await searchUsers(text)
      dispatch({
        type: 'GET_USERS',
        payload: userData
      })
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
      {users.length > 0 && <button onClick={() => dispatch({type:'CLEAR_USERS'})}>Clear</button>}
    </div>
  )
}

export default UserSearch
