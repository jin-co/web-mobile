import React from 'react'
import { useParams, Navigate, useNavigate, Routes, Route } from 'react-router-dom'

const Post = () => {
  const params = useParams()
  const navigate = useNavigate()

  const status = 200
  if(status === 404) {
    return <Navigate to = '/notfound' />
  }
  
  const onClick = () => {
    navigate('/about')
  }

  return (
    <>
      <h1>Post {params.id}</h1>
      <p>{params.name}</p>

      <button onClick={onClick}>Redirect</button>

      <Routes>
        <Route path='/show' element={<h1>hi</h1>} />
      </Routes>
    </>
  )
}

export default Post
