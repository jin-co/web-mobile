import Home from './app/pages/Home'
import Register from './app/pages/Register'
import Login from './app/pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
