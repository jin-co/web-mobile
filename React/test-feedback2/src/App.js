import Header from "./components/shared/Header"
import FeedbackData from './data/FeedbackData'
import { useState } from "react"
import FeedbackList from "./components/FeedbackList"

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
  <>    
    <Header/>
    <div className="container">
      <FeedbackList />
    </div>
  </>
  )
}

export default App
