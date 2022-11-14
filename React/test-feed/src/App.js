import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/Nav'
import { FeedProvider } from './components/Context/FeedContext'

const App = () => {
  return (
    <FeedProvider>
      <div>
        <Router>
          <Nav />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </main>
        </Router>
      </div>
    </FeedProvider>
  )
}

export default App
