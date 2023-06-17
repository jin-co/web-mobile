import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import shareIcon from '../assets/svg/shareIcon.svg'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Link, useParams } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'

export const Listing = () => {
  const auth = getAuth()
  const params = useParams()
  const [listing, setListing] = useState([])
  const [shareLinkCopied, setShareLinkCopied] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const docRef = doc(db, 'listings', params.listingId)
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()) {
      setListing()
      console.log(docSnap)
    }
  }

  return (
    <></>
    <main>
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        {listing.imageUrls.map((urls, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: `url(${listing.imageUrls[index]}) center no-repeat`,
                backgroundSize: 'cover',
                height: '300px',
              }}
              className="swiperSlideDiv"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="shareIconDiv"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          setShareLinkCopied(true)
          setTimeout(() => {
            setShareLinkCopied(false)
          }, 2000)
        }}
      >
        <img src={shareIcon} alt="" />
      </div>
      {shareLinkCopied && <p className="linkCopied">Link Copied</p>}
      <div className="listingDetails">
        <p className="listingName">
          {listing.name} - $
          {listing.offer
            ? listing.discountedPrice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : listing.regularPrice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p className="listingLocation">{listing.location}</p>
        <p className="listingType">
          For {listing.type === 'rent' ? 'Rent' : 'Sale'}
        </p>
        {listing.offer && (
          <p className="discountPrice">
            ${listing.regularPrice - listing.discountedPrice} discount
          </p>
        )}

        <ul className="listingDetailsList">
          <li>
            {listing.bedrooms > 1 ? `${listing.bedrooms}bedrooms` : '1 bedroom'}
          </li>
          <li>
            {listing.bathrooms > 1
              ? `${listing.bathrooms}bathrooms`
              : '1 bathroom'}
          </li>
          <li>{listing.parking && 'Parking spot'}</li>
          <li>{listing.furnished && 'Furnished'}</li>
        </ul>

        <p className="listingLocationTitle">Location</p>

        <div className="leafletContainer">
          <MapContainer
            style={{ height: '100%', width: '100%' }}
            center={[listing.geolocation.lat, listing.geolocation.lng]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
            />

            <Marker
              position={[listing.geolocation.lat, listing.geolocation.lng]}
            >
              <Popup>{listing.location}</Popup>
            </Marker>
          </MapContainer>
        </div>

        {auth.currentUser?.uid !== listing.userRef && (
          <Link
            to={`/contact/${listing.userRef}?listingName=${listing.name}`}
            className="primaryButton"
          >
            Contact landlord
          </Link>
        )}
      </div>
    </main>
  )
}