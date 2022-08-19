import Home from './pages/Home'
import About from './pages/About'
import Header from './component/layout/Header'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </>
    </Router>
  )
}

export default App
