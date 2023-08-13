import React, { useEffect } from 'react'
import { Spinner } from '../components/Spinner'
import { ListingItem } from '../components/ListingItem'
import { collection, getDocs } from 'firebase/firestore'

export const Offers = () => {
  const loading = false
  const listings = []

  useEffect(() => {
    fetchListings()
  }, [])

  const fetchListings = async () => {
    try {

    } catch (error) {

    }
  }

  return (
    <div className="category">
      <header>
        <p className="pageHeader">offers</p>
      </header>

      {loading ? (
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
          {/* {lastFetchedListing && (
            <p className="loadMore" onClick={onFetchMoreListings}>
              Load more
            </p>
          )} */}
        </>
      ) : (
        <p>No offers</p>
      )}
    </div>
  )
}
