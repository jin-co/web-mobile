import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

const CreateListing = () => {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  })

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    images,
    latitude,
    longitude,
  } = formData

  const auth = getAuth()
  const navigate = useNavigate()
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid })
        } else {
          navigate('/sign-in')
        }
      })
    }

    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const onMutate = (e) => {
    let boolean = null
    if (e.target.value === 'true') {
      boolean = true
    }

    if (e.target.value === 'false') {
      boolean = false
    }

    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        images: e.target.files,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }
  }

  if (loading) {
    return <Spinner />
  }
  return (
    <div className="profile">
      <header>
        <p className="pageHeader">Create a listing</p>
      </header>

      <main>
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="" className="formLabel">
            Sell / Rent
          </label>
          <div className="formButtons">
            <button
              type="button"
              className={type === 'sale' ? 'formButtonActive' : 'formButton'}
              id="type"
              valse="sale"
              onClick={onMutate}
            >
              Sell
            </button>

            <button
              type="button"
              className={type === 'rent' ? 'formButtonActive' : 'formButton'}
              id="type"
              valse="rent"
              onClick={onMutate}
            >
              Rent
            </button>
          </div>

          <label htmlFor="name" className="formLabel">
            Name
          </label>
          <input
            type="text"
            className="formInputName"
            id="name"
            value={name}
            onChange={onMutate}
            maxLength="32"
            minLength="10"
            required
          />

          <div className="formRooms flex">
            <div>
              <label htmlFor="bedrooms" className="formLabel">
                Bedrooms
              </label>
              <input
                type="number"
                className="formInputSmall"
                id="bedrooms"
                value={bedrooms}
                onChange={onMutate}
                maxLength="1"
                minLength="50"
                required
              />
            </div>

            <div>
              <label htmlFor="bathrooms" className="formLabel">
                Bathrooms
              </label>
              <input
                type="number"
                className="formInputSmall"
                id="bathrooms"
                value={bathrooms}
                onChange={onMutate}
                maxLength="1"
                minLength="50"
                required
              />
            </div>
          </div>

          <label htmlFor="" className="formLabel">
            Parking spot
          </label>
          <div className="formButtons">
            <button
              className={parking ? 'formButtonActive' : 'formButton'}
              type="button"
              id="parking"
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>

            <button
              className={
                !parking && parking !== null ? 'formButtonActive' : 'formButton'
              }
              type="button"
              id="parking"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          <label htmlFor="" className="formLabel">
            Furnished
          </label>
          <div className="formButtons">
            <button
              className={furnished ? 'formButtonActive' : 'formButton'}
              type="button"
              id="furnished"
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>

            <button
              className={
                !furnished && furnished !== null
                  ? 'formButtonActive'
                  : 'formButton'
              }
              type="button"
              id="furnished"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          <label htmlFor="address" className="formLabel">
            Address
          </label>
          <input
            type="text"
            className="formInputAddress"
            id="address"
            value={address}
            onChange={onMutate}
            required
          />

          {!geolocationEnabled && (
            <div className="formLatLng flex">
              <div>
                <label htmlFor="latitude" className="formLabel">
                  Latitude
                </label>
                <input
                  type="text"
                  className="formInputSmall"
                  id="latitude"
                  value={latitude}
                  onChange={onMutate}
                  required
                />
              </div>
              <div>
                <label htmlFor="longitude" className="formLabel">
                  Longitude
                </label>
                <input
                  type="text"
                  className="formInputSmall"
                  id="longitude"
                  value={longitude}
                  onChange={onMutate}
                  required
                />
              </div>
            </div>
          )}

          <label htmlFor="address" className="formLabel">
            Offer
          </label>
          <div className="formButtons">
            <button
              className={offer ? 'formButtonActive' : 'formButton'}
              type="button"
              id="offer"
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>

            <button
              className={
                !offer && offer !== null ? 'formButtonActive' : 'formButton'
              }
              type="button"
              id="offer"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          <label htmlFor="address" className="formLabel">
            Regular Price
          </label>
          <div className="formPriceDiv">
            <input
              type="number"
              className="formInputSmall"
              id="regularPrice"
              value={regularPrice}
              min="50"
              max="750000000"
              onChange={onMutate}
              required
            />
            {type === 'rent' && <p className="formPriceText">$ / Month</p>}
          </div>

          {offer && (
            <>
              <label htmlFor="address" className="formLabel">
                Discounted Price
              </label>
              <input
                type="number"
                className="formInputSmall"
                id="discountedPrice"
                value={discountedPrice}
                min="50"
                max="750000000"
                onChange={onMutate}
                required={offer}
              />
            </>
          )}

          <label htmlFor="address" className="formLabel">
            Images
          </label>
          <p className="imagesInfo">
            The first image will be the cover (max 6).
          </p>
          <input
            type="file"
            className="formInputFile"
            id="images"
            min="6"
            accept=".jpg, .png, .jpeg"
            onChange={onMutate}
            multiple
            required={offer}
          />

          <button className="primaryButton createListingButton" type="submit">
            Create listing
          </button>
        </form>
      </main>
    </div>
  )
}

export default CreateListing
