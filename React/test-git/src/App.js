import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<Notfound />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
