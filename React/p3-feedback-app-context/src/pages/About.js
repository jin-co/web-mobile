import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Card>
      <h1>About this project</h1>
      <p>This is </p>
      <p>Version: 1.0</p>

      <p>
        <Link to="/">Back</Link>
      </p>
    </Card>
  )
}

export default About
