import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Alert from './components/layout/Alert'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <div>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Alert />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
