import { Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/layouts/Nav'

const App = () => {
  return (
    <>    
      <Nav />
      <Router>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
