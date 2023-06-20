import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Join } from './pages/Join'
import { Login } from './pages/Login'
import { Header } from './components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './components/PrivateRoute'
import { NewTicket } from './pages/NewTicket'

export const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/join' element={<Join />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/new-ticket' element={<PrivateRoute />}>
              <Route path='/new-ticket' element={<NewTicket />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}
