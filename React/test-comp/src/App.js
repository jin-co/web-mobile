import Header from './components/shared/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'

const App = () => {
  const [feed, setFeed] = useState(FeedbackData)
  return (
    <>
      <Header />
      <FeedbackList feedback={feed} />
      <h1>dd</h1>
    </>
  )
}

export default App
