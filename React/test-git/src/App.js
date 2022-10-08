import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import User from './pages/User'
import Nav from './components/layout/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col">
        <Nav />
        <main className="container mx-auth px-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
