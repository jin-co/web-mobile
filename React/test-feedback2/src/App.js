import Header from './components/shared/Header'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuid } from 'uuid'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteItem = (id) => {
    setFeedback(feedback.filter((f) => f.id !== id))
  }

  const addItem = (newRating) => {
    console.log(newRating)
    newRating.id = uuid()
    setFeedback([newRating, ...feedback])
  }

  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackStats feedback={feedback} />
                  <FeedbackForm handleAdd={addItem} />
                  <FeedbackList feedback={feedback} handelDelete={deleteItem} />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </>
  )
}

export default App
