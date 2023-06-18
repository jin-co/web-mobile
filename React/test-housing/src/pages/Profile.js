import React from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
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
import { ListingItem } from '../components/ListingItem'

export const Profile = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const [loading, setLoading] = useState(false)
  const [listings, setListings] = useState([])
  const [formData, setFormData] = useState({
    name: auth.currentUser.name,
    email: auth.currentUser.email,
  })

  const { name, email } = formData

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const listingRef = collection(db, 'listings')
    const docSnap = await getDocs(listingRef)
    let listings = []
    docSnap.forEach(doc => {
      listings.push({
        id: doc.id,
        data: doc.data()
      })
    });
    setListings(listings)
    setLoading(false)
  }

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  const onSubmit = (e) => {

  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const onDelete = async (id) => {
    await deleteDoc(db, 'listings', id)
    setListings(listings.filter(l => l.id !== id))
  }

  const onEdit = (id) => {
    navigate(`/edit-listing/${id}`)
  }

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button className="logOut" type="button" onClick={onLogout}>
          Logout
        </button>
      </header>

      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmit()
              setChangeDetails((prev) => !prev)
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
              className={!changeDetails ? 'profileName' : 'profileNameActive'}
              disabled={!changeDetails}
              value={name}
              onChange={handleChange}
            />

            <input
              type="text"
              id="email"
              className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
              disabled={!changeDetails}
              value={email}
              onChange={handleChange}
            />
          </form>
        </div>

        <Link to="/create-listing" className="createListing">
          <img src={homeIcon} alt="" />
          <p>Sell or rent</p>
          <img src={arrowRight} alt="" />
        </Link>

        {!loading && listings?.length > 0 && (
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
        )}
      </main>
    </div>
  )
}
