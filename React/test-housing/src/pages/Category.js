import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ListingItem } from '../components/ListingItem'
import { Spinner } from '../components/Spinner'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'

export const Category = () => {
  const params = useParams()
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const colRef = collection(db, 'listings')
    const querySnap = await getDocs(colRef)
    let listings = []
    querySnap.forEach(doc => {
      listings.push({
        id: doc.id,
        data: doc.data()
      })
    });
    setListings(listings)
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
        <p>No listing for {params.categoryName}</p>
      )}
    </div>
  )
}
