import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
import Spinner from '../components/Spinner'

const Category = () => {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, 'listings')
        const q = query(
          listingsRef,
          where('type', '==', params.CategoryName),
          orderBy('timestamp', 'desc'),
          limit(10)
        )

        const querySnap = await getDocs(q)
        const listings = []
        querySnap.forEach((doc) => {          
          return listings.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setListings(listings)
        setLoading(false)
      } catch (error) {
        toast.error('Fetching listing failed')
      }
    }

    fetchListings()
  })
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
                <h3>{listing.data}</h3>
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>No listing for {params.categoryName}</p>
      )}
    </div>
  )
}

export default Category
