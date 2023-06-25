import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { Spinner } from '../components/Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth)
  const onSubmit = (e) => {
    e.preventDefault()
    const user = {
      email,
      password
    }
    dispatch(login(user))
    if(isSuccess) {
      navigate('/')
    }
  }

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Log in
        </h1>
        <p>Please login</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              required
              type="email"
              className="form-control"
              id="email"
              value={email}
              name="email"
              onChange={onChange}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <input
              required
              type="password"
              className="form-control"
              id="password"
              value={password}
              name="password"
              onChange={onChange}
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}
