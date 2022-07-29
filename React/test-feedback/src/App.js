import FeedbackList from './components/FeedbackList'
import Header from './components/shared/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <>
          <Header />
          <main className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackStats />
                    <FeedbackForm />
                    <FeedbackList />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
            <Link to="/about">
              <FaQuestion />
            </Link>
          </main>
        </>
      </Router>
    </FeedbackProvider>
  )
}

export default App
