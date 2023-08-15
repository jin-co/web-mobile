import React, { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'
import { ListingItem } from '../components/ListingItem'

export const Profile = () => {
  const [changeDetails, setChangeDetails] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  useEffect(() => {
    const auth = getAuth()
    console.log(auth)
  }, [])

  const { name, email } = formData

  const onLogout = () => {

  }

  const onSubmit = (e) => {

  }

  const onChange = (e) => {

  }

  const handleChange = (e) => {

  }

  const onDelete = () => {

  }

  const onEdit = () => {

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
