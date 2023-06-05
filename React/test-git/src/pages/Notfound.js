import React from 'react'
import { Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb-8">404 - page not found</p>
          <Link className="btn btn-primary btn-lg" to="/">
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}
