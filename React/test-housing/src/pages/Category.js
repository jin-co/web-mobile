import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection } from 'firebase/firestore'
import { db } from '../firebase.config'
import {toast} from 'react-toastify'

export const Category = () => {
  const params = useParams()
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(null)
  const [lastFetched, setLastFetched] = useState(null)

  useEffect(() => {
    fetchListings()
  }, [])

  const fetchListings = async () => {
    try {
      const listingRef = collection
    } catch (error) {

    }
  }

  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {params.categoryName === 'rent'
            ? 'Places for rent'
            : 'Places for sale'}
        </p>
      </header>

      {/* {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </main>
          <br />
          <br />
          {lastFetchedListing && (
            <p className="loadMore" onClick={onFetchMoreListings}>
              Load more
            </p>
          )}
        </>
      ) : (
        <p>No listing for {params.categoryName}</p>
      )} */}
    </div>
  )
}
