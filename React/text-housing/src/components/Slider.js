import React, { useEffect, useState } from 'react'
import { db } from '../firebase.config'
import { doc, collection, getDoc, getDocs } from 'firebase/firestore'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigate, useNavigate } from 'react-router-dom'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const Slider = () => {
  const navigate = useNavigate()
  const [images, setImages] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {            
        let images = []    
        const docSnap = await getDocs(collection(db, 'listings'))
        docSnap.forEach(doc => {                                     
          images.push({
            id: doc.id,
            data: doc.data()
          })
        });                  
        setImages(images)
      } catch (error) {
      }
    }
    fetchData()
  }, [])

  return (
    <Swiper slidesPerView={1} pagination={{ clickable: true }}>
    {images.map((data, index) => (
      <SwiperSlide key={index} onClick={() => {navigate(`/category/${data.data.type}/${data.id}`)}}>
        <div
          style={{
            background: `url(${data.data.imageUrls[0]}) center no-repeat`,
            backgroundSize: 'cover',
            height: '300px',
          }}
          className="swiperSlideDiv"          
        ></div>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}
