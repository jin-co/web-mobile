import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRight } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFromData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    
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
                  <ArrowRight fill="#ffffff" width="34px" height="34px" />
                </button>
              </div>
            </form>

            {/* <OAuth /> */}
          </main>
        </header>
      </div>
    </>
  )
}

export default SignIn
