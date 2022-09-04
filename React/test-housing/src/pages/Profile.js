import React from 'react'
import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Profile = () => {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const onLogout = () => {
    auth.signOut()
    navigator('/')
  }

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button className="logOut" type="button" onClick={onLogout}>
          Logout
        </button>
      </header>
    </div>
  )
}

export default Profile
