import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className="text-6xl">
        {process.env.REACT_APP_GITHUB_URL}
      </h1>
    </div>
  )
}

export default Home
