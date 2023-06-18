import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase.config'
import { ListingItem } from '../components/ListingItem'
import { Spinner } from '../components/Spinner'

export const Offers = () => {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchListing()
  }, [])

  const fetchListing = async () => {
    const colRef = collection(db, 'listings')
    const docRef = await getDocs(colRef)
    let listings = []
    docRef.forEach(doc => {
      listings.push({
        id: doc.id,
        data: doc.data()
      })
      setLoading(false)
      setListings(listings)
    });
  }

  return (
    loading ? <Spinner /> :
    <div className="category">
      <header>
        <p className="pageHeader">offers</p>
      </header>

      {listings && listings.length > 0 ? (
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
