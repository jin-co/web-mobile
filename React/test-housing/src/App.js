import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Explore } from './pages/Explore'
import { Category } from './pages/Category'
import { CreateListing } from './pages/CreateListing'
import { EditListing } from './pages/EditListing'
import { ForgotPassword } from './pages/ForgotPassword'
import { Listing } from './pages/Listing'
import { Offers } from './pages/Offers'
import { Profile } from './pages/Profile'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Contact } from './pages/Contact'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Explore />} />
          <Route exact path='/category' element={<Category />} />
          <Route exact path='/createListing' element={<CreateListing />} />
          <Route exact path='/editListing' element={<EditListing />} />
          <Route exact path='/forgotPassword' element={<ForgotPassword />} />
          <Route exact path='/listing' element={<Listing />} />
          <Route exact path='/offers' element={<Offers />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/signIn' element={<SignIn />} />
          <Route exact path='/signUp' element={<SignUp />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  )
}
