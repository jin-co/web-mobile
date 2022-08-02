import React from 'react'
import { useState } from 'react'

const UserSearch = () => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 mb-8 gap-8">
      <div>
        <form action="">
          <div className="form-control">
            <div className="relative">
              <input
                value={text}
                onChange={handleChange}
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="search"
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <button className="btn btn-ghost btn-lg">Clear</button>
      </div>
    </div>
  )
}

export default UserSearch
