import React from 'react'
import { getAuth, updateProfile, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  updateDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'


export const Profile = () => {
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const { name, email } = formData

  const [userReady, setUserReady] = useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserReady(true)
      }
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name
        })

        const userRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(userRef, {
          name
        })
      }
    } catch (error) {
      toast.error('what the')
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    userReady &&
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button className="logOut" type="button" onClick={() => {
          auth.signOut()
          navigate('/')
        }}>
          Logout
        </button>
      </header>

      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && handleSubmit()
              setChangeDetails(!changeDetails)
            }}
          >
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>
        <div className="profileCard">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              className={!changeDetails ? 'profileName' : 'profileNameActive'}
              disabled={!changeDetails}
              onChange={handleChange}
            />

            <input
              type="text"
              id="email"
              className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
              disabled={!changeDetails}
              onChange={handleChange}
              value={email}
            />
          </form>
        </div>

        <Link to="/create-listing" className="createListing">
          <img src={homeIcon} alt="" />
          <p>Sell or rent</p>
          <img src={arrowRight} alt="" />
        </Link>

        {/* {!loading && listings?.length > 0 && (
          <>
            <p className="listingText">Your listings</p>
            <ul className="listingsList">
              {listings.map((lis) => (
                <ListingItem
                  key={lis.id}
                  listing={lis.data}
                  id={lis.id}
                  onDelete={() => onDelete(lis.id)}
                  onEdit={() => onEdit(lis.id)}
                />
              ))}
            </ul>
          </>
        )} */}
      </main>
    </div>
  )
}
