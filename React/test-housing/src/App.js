import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Explore } from './pages/Explore'
import { Offers } from './pages/Offers'
import { Category } from './pages/Category'
import { Join } from './pages/Join'
import { Login } from './pages/Login'
import { EditListing } from './pages/EditListing'
import { ForgotPassword } from './pages/ForgotPassword'
import { CreateListing } from './pages/CreateListing'
import { Listing } from './pages/Listing'
import { Contact } from './pages/Contact'
import { Nav } from './components/Nav'
import { ToastContainer } from 'react-toastify'
import { Profile } from './pages/Profile'
import { PrivateRoute } from './components/PrivateRoute'

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Explore />} />
          <Route exact path='/offers' element={<Offers />} />
          <Route exact path='/profile' element={<PrivateRoute />}>
            <Route exact path='/profile' element={<Profile />} />
          </Route>
          <Route exact path='/category/:categoryName' element={<Category />} />
          <Route exact path='/forgot-password' element={<ForgotPassword />} />
          <Route exact path='/create-listing' element={<CreateListing />} />
          <Route exact path='/edit-listing/:listingId' element={<EditListing />} />
          <Route exact path='/join' element={<Join />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/category/:categoryName/:listingId' element={<Listing />} />
          <Route exact path='/contact/:landlordId' element={<Contact />} />
        </Routes>
        <Nav />
      </Router>
      <ToastContainer />
    </>
  )
}
