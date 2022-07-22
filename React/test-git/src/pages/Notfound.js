import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className="hero">
      Notfound
      <Link to="/">
        <FaHome />
        Go back
      </Link>
    </div>
  )
}

export default Notfound
