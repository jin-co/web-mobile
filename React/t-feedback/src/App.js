import FeedbackForm from './component/FeedbackForm'
import FeedbackList from './component/FeedbackList'
import FeedbackStats from './component/FeedbackStats'
import Header from './component/shared/Header'
import About from './component/About'
import AboutLink from './component/AboutLink'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Provider } from './context/Context'

const App = () => {
  return (
    <Provider>
      <Router>
        <>
          <Header />
          <div className="container">
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
              <AboutLink />
            </Link>
          </div>
        </>
      </Router>
    </Provider>
  )
}

export default App
