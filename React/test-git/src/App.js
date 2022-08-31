import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './component/layout/Footer'
import Navbar from './component/layout/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { GitProvider } from './context/GitContext'
import User from './pages/User'
import { AlertProvider } from './context/AlertContext'
import Alert from './component/layout/Alert'

const App = () => {
  return (
    <GitProvider>
      <AlertProvider>
        <>
          <Router>
            <div className="flex flex-col justify-between h-screen">
              <Navbar />
              <main className="container px-3 pb-12 mx-auto">
              <Alert/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/user/:login" element={<User />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </>
      </AlertProvider>
    </GitProvider>
  )
}

export default App
