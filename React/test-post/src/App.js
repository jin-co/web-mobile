import { Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/layouts/Nav'

const App = () => {
  return (
  <>
  <Nav/>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
  </>
  )
}

export default App