import React from 'react'
import { useParams } from 'react-router-dom'

export const About = () => {
  const param = useParams()
  return (
    <div>{
      param.id
    }</div>
  )
}
