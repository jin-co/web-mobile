import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ item: { login, avatar_url } }) => {
  return (
    <div className="card shadow-md">
      <div>
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h3>{login}</h3>
      </div>
      <Link to={`/users/${login}`}>Detail</Link>
    </div>
  )
}

export default UserItem
