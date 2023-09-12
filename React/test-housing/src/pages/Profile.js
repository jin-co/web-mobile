import React, { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'
import { ListingItem } from '../components/ListingItem'
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '../firebase.config'

export const Profile = () => {
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const navigate = useNavigate()
  const { name, email } = formData

  useEffect(() => {
    const fetchUserListings = async () => {
      const listingRef = collection(db, 'listings')
      const q = query(
        listingRef,
        where('userRef', '==', auth.currentUser.uid)
      )

      const querySnap = await getDocs(q)
      let listings = []
console.log(querySnap)
      querySnap.forEach((doc) => {
        console.log('doc: ', doc)
        console.log(doc.data())
        listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      console.log(listings)
      setListings(listings)
      setLoading(false)
    }

    fetchUserListings()
    fetchListings()
  }, [])

  const fetchListings = async () => {
    const docRef = collection(db, 'listings')
    const docSnap = await getDocs(docRef)
    const listings = []
    docSnap.forEach(doc => {
      listings.push({
        id: doc.id,
        item: doc.data()
      })
    });
    setListings(listings)
  }

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  const onSubmit = async (e) => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name
        })
      }
    } catch (error) {

    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const onDelete = async (id) => {
    await deleteDoc(doc(db, 'listings', id))
    const updatedListings = listings.filter(l => l.id !== id
    )
    setListings(updatedListings)
  }

  const onEdit = (listingId) => {
    navigate(`/edit-listing/${listingId}`)
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
              {
                listings.map((lis) => (
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
