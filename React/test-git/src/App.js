import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './component/layout/Footer'
import Navbar from './component/layout/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { GitProvider } from './context/GitContext'

const App = () => {
  return (
    <GitProvider>
      <>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container px-3 pb-12 mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </>
    </GitProvider>
  )
}

export default App
