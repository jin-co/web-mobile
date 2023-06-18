import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const Slider = () => {
  const [listings, setListings] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const colRef = collection(db, 'listings')
    const docSnap = await getDocs(colRef)
    let listings = []
    docSnap.forEach(doc => {
      listings.push({
        id: doc.id,
        data: doc.data()
      })
    });
    setListings(listings)
  }
  return (
    listings && (
      <>
        <p className="exploreHeading">Recommended</p>
        <Swiper slidesPerView={1} pagination={{ clickable: true }}>
          {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                className="swiperSlideDiv"
                style={{
                  background: `url(${data.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                  height: '200px',
                }}
              >
                <p className="swiperSlideText">{data.name}</p>
                <div className="swiperSlidePrice">
                  ${data.discountedPrice ?? data.regularPrice}{' '}
                  {data.type === 'rent' && '/ month'}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  )
}
