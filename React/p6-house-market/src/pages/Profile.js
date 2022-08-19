import React from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'

const Profile = () => {
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFromData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const { name, email } = formData
  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  const onSubmit = () => {}

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My profile</p>
        <button className="logOut" onClick={onLogout}>
          Logout
        </button>
      </header>
      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsTest">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmit()
              setChangeDetails((prevState) => !prevState)
            }}
          >
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>
      </main>
    </div>
  )
}

export default Profile
