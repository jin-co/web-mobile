import Home from './app/pages/Home'
import Register from './app/pages/Register'
import Login from './app/pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './app/components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NewTicket from './app/pages/NewTicket'

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/new-ticket" element={<NewTicket />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
