import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from './shared/Card'

const About = () => {
  const params = useParams()
  return (
    <div>
      <Card>
        <p>About</p>
        <p> {params.id} </p>
      </Card>
      <Link style={{color:'white'}} to="/">go back</Link>      
    </div>
  )
}

export default About
