import React from 'react'
import { Link } from 'react-router-dom'
import Card from './shared/Card'

const About = () => {
  return (
    <div>
      <Card>
        <p>About</p>
      </Card>
      <Link style={{color:'white'}} to="/">go back</Link>
    </div>
  )
}

export default About
