import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { db } from '../firebase.config'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'
import OAuth from '../components/OAuth'

export const Join = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formData

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = newUser.user
      updateProfile(auth.currentUser, {
        displayName: name
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.serverTimestamp()
      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    } catch (error) {
      toast.error('Register Fail')
    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome</p>
          <main>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="nameInput"
                placeholder="name"
                id="name"
                value={name}
                onChange={handleChange}
              />

              <input
                type="email"
                className="emailInput"
                placeholder="email"
                id="email"
                value={email}
                onChange={handleChange}
              />

              <div className="passwordInputDiv">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="passwordInput"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                />

                <img
                  src={visibilityIcon}
                  alt=""
                  className="showPassword"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>

              <div className='container'>
                <Link to="/login" className="forgotPasswordLink">
                  Sign In Instead
                </Link>

                <Link to="/forgot-password" className="forgotPasswordLink">
                  Forgot Password
                </Link>
              </div>

              <div className="signUpBar">
                <p className="signUpText">Sign Up</p>

                <button className="signUpButton">
                  <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
                </button>
              </div>
            </form>

            <OAuth />
          </main>
        </header>
      </div>
    </>
  )
}
