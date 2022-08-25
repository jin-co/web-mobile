import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './component/layout/Footer'
import Navbar from './component/layout/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
