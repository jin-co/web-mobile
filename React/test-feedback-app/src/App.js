import React from 'react'
import Header from './components/shared/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './components/About'
import { FaQuestion } from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Provider } from './context/Context'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  // const deleteFeedback = (id) => {
  //   setFeedback(feedback.filter((f) => f.id !== id))
  // }

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Provider>
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
                    <FeedbackStats />
                    <FeedbackForm handleAdd={addFeedback} />
                    <FeedbackList />
                  </>
                }
              ></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
          <div className="about-link">
            <Link to="/about">
              <FaQuestion size={30} />
            </Link>
          </div>
        </Router>
      </>
    </Provider>
  )
}

export default App
