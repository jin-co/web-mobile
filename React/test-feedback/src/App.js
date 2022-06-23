import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuid } from 'uuid'
import About from './pages/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Sure?')) {
      setFeedback(feedback.filter((i) => i.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid()
    setFeedback([newFeedback, ...feedback])
    console.log(newFeedback)
  }

  return (
    <Router>
      <Header text="Hello" />
      <div className="container">
      <Route exact path='/'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </Route>
        <Route path="/about" component={About} />          
      </div>
    </Router>
  )
}

export default App
