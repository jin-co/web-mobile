import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import Header from './components/shared/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import { useState } from 'react'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header/>
      <main className='container'>
      
      <FeedbackForm/>
        <FeedbackList/>
      </main>
    </>
  )
}

export default App