import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Explore } from './pages/Explore'
import { Offers } from './pages/Offers'
import { Category } from './pages/Category'
import { Profile } from './pages/Profile'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { ForgotPassword } from './pages/ForgotPassword'
import { CreateListing } from './pages/CreateListing'
import { EditListing } from './pages/EditListing'
import { Contact } from './pages/Contact'
import { Listing } from './pages/Listing'
import { PrivateRoute } from './components/PrivateRoute'
import { Nav } from './components/Nav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Explore />} />
          <Route exact path='/offers' element={<Offers />} />
          <Route exact path='/category/:categoryName' element={<Category />} />
          <Route exact path='/profile' element={<PrivateRoute />}>
            <Route exact path='/profile' element={<Profile />} />
          </Route>
          <Route exact path='/sign-in' element={<SignIn />} />
          <Route exact path='/sign-up' element={<SignUp />} />
          <Route exact path='/forgot-password' element={<ForgotPassword />} />
          <Route exact path='/create-listing' element={<CreateListing />} />
          <Route exact path='/edit-listing/:listing-id' element={<EditListing />} />
          <Route exact path='/category/:type/:listing-id' element={<Listing />} />
          <Route exact path='/contact/:landlord-id' element={<Contact />} />
        </Routes>
        <Nav />
      </Router>
      <ToastContainer/>
    </>
  )
}
