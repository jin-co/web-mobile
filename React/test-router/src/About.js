import React from 'react'
import { Routes, Route } from 'react-router-dom'


export const About = () => {
  return (
    <Routes>
      <Route path='/nested1' element={<h1>Nested 1</h1>} />
    </Routes>
  )
}


