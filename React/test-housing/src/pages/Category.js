import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import { ListingItem } from '../components/ListingItem'
import { Spinner } from '../components/Spinner'

export const Category = () => {
  const params = useParams()
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [lastFetchedListing, setLastFetchedListing] = useState(null)

  useEffect(() => {
    fetchListings()
  }, [])

  const fetchListings = async () => {
    try {
      const listingRef = collection(db, 'listings')
      const q = query(
        listingRef,
        where('type', '==', params.categoryName),
        orderBy('timestamp', 'desc'),
        limit(10)
      )
      const docSnap = await getDocs(q)
      const listings = []
      console.log(docSnap)
      docSnap.forEach((doc) => {
        console.log(doc.data())
        listings.push({
          id: doc.id,
          data: doc.data()
        })
      })
      setListings(listings)
      setLoading(false)
    } catch (error) {
      toast.error('failed')
    }
  }

  const onFetchMoreListings = async () => {
    try {
      const listingRef = collection(db, 'listings')
      const q = query(
        listingRef,
        where('type', '==', params.categoryName),
        orderBy('timestamp', 'desc'),
        startAfter(lastFetchedListing),
        limit(10)
      )
      const querySnap = await getDocs(q)
      const lastList = querySnap.docs[querySnap.docs.length - 1]
      setLastFetchedListing(lastFetchedListing)
    } catch (error) {
      toast.error('Failed')
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
        <p>No listing for {params.categoryName}</p>
      )}
    </div>
  )
}
