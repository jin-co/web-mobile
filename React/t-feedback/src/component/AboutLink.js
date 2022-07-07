import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutLink = () => {
  return (
    <Link to="/about">
      <FaQuestion></FaQuestion>
    </Link>
  )
}

export default AboutLink
