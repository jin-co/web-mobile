import React from 'react'
import Header from './components/shared/Header'
import FeedbackList from './components/FeedbackList'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList />
      </div>
    </>
  )
}

export default App
