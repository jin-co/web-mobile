import Header from './components/shared/Header'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <FeedbackStats />
        <FeedbackForm />
        <FeedbackList />
      </main>
    </>
  )
}

export default App
