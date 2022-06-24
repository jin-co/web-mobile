import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Card>
      <h1>About</h1>
      <Link to="/">Back</Link>
    </Card>
  )
}

export default About
