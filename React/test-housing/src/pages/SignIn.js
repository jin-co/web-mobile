import React, { useState } from 'react'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { Link, useNavigate } from 'react-router-dom'
import { OAuth } from '../components/OAuth'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const SignIn = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData
  const auth = getAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, password)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome</p>
          <main>
            <form onSubmit={handleSubmit}>
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
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>

              <div className="container">
                <Link to="/sign-up" className="forgotPasswordLink">
                  Sign Up Instead
                </Link>

                <Link to="/forgot-password" className="forgotPasswordLink">
                  Forgot Password
                </Link>
              </div>

              <div className="signInBar">
                <p className="signInText">Sign In</p>

                <button className="signInButton">
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
