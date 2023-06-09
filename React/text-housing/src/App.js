import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Explore } from './pages/Explore'
import { ForgotPW } from './pages/ForgotPW'
import { Join } from './pages/Join'
import { Login } from './pages/Login'
import { Offers } from './pages/Offers'
import { Profile } from './pages/Profile'
import { Nav } from './components/Nav'
import { PrivateRoute } from './components/PrivateRoute';

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Explore />} />
          <Route exact path='/offer' element={<Offers />} />
          <Route exact path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route exact path='/join' element={<Join />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/forgot-password' element={<ForgotPW />} />
        </Routes>
        <Nav />
      </Router>
      <ToastContainer />
    </>
  )
}
