import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStat from './components/FeedbackStat'
import FeedbackData from './data/FeedbackData'
import Header from './components/shared/Header'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStat feedback={feedback} />
        <FeedbackForm feedback={feedback} />
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
