import React, { useEffect, useState } from 'react'
import { Spinner } from '../components/Spinner'
import { ListingItem } from '../components/ListingItem'
import { collection, getDocs, where, query, orderBy, limit, startAfter } from 'firebase/firestore'
import { db } from '../firebase.config'

export const Offers = () => {
  const loading = false
  const [listings, setListings] = []
  const [lastFetchedListing, setLastFetchedListing] = useState()

  useEffect(() => {
    fetchListings()
  }, [])

  const fetchListings = async () => {
    try {
      const listingRef = collection(db, 'listings')
      const q = query(
        listingRef,
        where('offer', '==', true),
        orderBy('timestamp', 'desc'),
        limit(10)
      )
      const docSnap = await getDocs(q)
      const listings = []
      docSnap.forEach(doc => {
        listings.push({
          id: doc.id,
          data: doc.data()
        })
      })
      setListings(listings)
    } catch (error) {

    }
  }

  const onFetchMoreListings = async () => {
    try {
      const listingRef = collection(db, 'listings')
      const q = query(
        listingRef,
        where('offer', '==', true),
        orderBy('timestamp', 'desc'),
        startAfter(lastFetchedListing),
        limit(10)
      )
      const docSnap = await getDocs(q)
      const listings = []
      const lastList = docSnap.docs[docSnap.docs.length - 1]
      setLastFetchedListing(lastList)
      docSnap.forEach(doc => {
        listings.push({
          id: doc.id,
          data: doc.data()
        })
      })
      setListings(listings)
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
          {lastFetchedListing && (
            <p className="loadMore" onClick={onFetchMoreListings}>
              Load more
            </p>
          )}
        </>
      ) : (
        <p>No offers</p>
      )}
    </div>
  )
}
