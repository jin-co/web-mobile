import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { join, reset } from '../../features/auth/authSlice'


export const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const { name, email, password, passwordConfirm } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    if(password !== passwordConfirm) {
      toast.error('PW not match')
    } else {
      const user = {
        name,
        email,
        password
      }      
      dispatch(join(user))
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
          <FaUser />
          Register
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
