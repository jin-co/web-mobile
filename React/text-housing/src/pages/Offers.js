import React, { useEffect, useState } from 'react'
import { Spinner } from '../components/Spinner'
import { ListingItem } from '../components/ListingItem'
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

export const Offers = () => {
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const listingRef = collection(db, 'listings')
      const q = query(
        listingRef,
        where('offer', '==', true),
        orderBy('timestamp', 'desc'),
        limit(10)
      )
      const querySnap = await getDocs(q)
      const listings = []
      querySnap.forEach(doc => {
        listings.push({
          id: doc.id,
          data: doc.data()
        })
      })
      setListings(listings)
      setLoading(false)
    } catch (error) {
      toast.error('Offer Fail')
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
