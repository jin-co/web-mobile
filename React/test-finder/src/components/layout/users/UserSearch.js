import React, { useContext } from 'react'
import { useState } from 'react'
import FinderContext from '../../../context/finder/FinderContext'
import AlertContext from '../../../context/alert/AlertContext'
import { searchUser } from '../../../context/finder/FinderActions'

export const UserSearch = () => {
  const [text, setText] = useState('')
  const { dispatch } = useContext(FinderContext)
  const { toggleAlert } = useContext(AlertContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text == '') {      
      toggleAlert()
    } else {      
      dispatch({
        type: 'SET_LOADING'
      })
      const items = await searchUser(text)
      dispatch({
        type: 'GET_USERS',
        payload: items
      })
    }
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit} className="form-control" >
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

      <div>
        <button className="btn btn-ghost btn-lg" onClick={() => dispatch({
          type: 'CLEAR_RESULT'
        })}>Clear</button>
      </div>
    </div>
  )
}
