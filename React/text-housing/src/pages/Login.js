import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import OAuth from '../components/OAuth'

export const Login = () => {
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome</p>
          <main>
            <form >
              <input
                type="email"
                className="emailInput"
                placeholder="email"
                id="email"
              />

              <div className="passwordInputDiv">
                <input
                  // type={showPassword ? 'text' : 'password'}
                  className="passwordInput"
                  placeholder="Password"
                  id="password"
                />

                <img
                  src={visibilityIcon}
                  alt=""
                  className="showPassword"

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