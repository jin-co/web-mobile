import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import User from './pages/User'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AlertProvider } from './context/alert/AlertContext'
import { GitProvider } from './context/github/GitContext'
import Alert from './components/layout/Alert'

const App = () => {
  return (
    <GitProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Nav />
            <main className="container mx-auth px-1">
            <Alert/>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/*" element={<Notfound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitProvider>
  )
}

export default App
