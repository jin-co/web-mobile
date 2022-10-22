import React from 'react'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../features/auth/authSlice'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const { name, email, password, passwordConfirm } = formData

  const dispatch = useDispatch()
  const { user, isLoading, isSuccess, message } = useSelector(state => state.auth)

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      toast.error('password do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register {user}
        </h1>
        <p>Create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="name"
              value={name}
              name="name"
              onChange={onChange}
              placeholder="Enter name"
            />
          </div>

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
            <input
              required
              type="password"
              className="form-control"
              id="passwordConfirm"
              value={passwordConfirm}
              name="passwordConfirm"
              onChange={onChange}
              placeholder="Confirm password"
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

export default Register
