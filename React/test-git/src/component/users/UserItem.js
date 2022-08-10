import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card compact side bg-base-100">
      <div className="flex-row times-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h14">
            <img className="" src={avatar_url} alt="" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="card-title">{login}</h2>
        <Link to={`/user/${login}`}>Visit</Link>
      </div>      
    </div>
  )
}

export default UserItem
