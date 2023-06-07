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
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome</p>
          <main>
            <form >
              <input
                type="text"
                className="nameInput"
                placeholder="name"
                id="name"
              />

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

              <div className='container'>
                <Link to="/sign-in" className="forgotPasswordLink">
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
