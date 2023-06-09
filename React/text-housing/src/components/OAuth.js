import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'

const OAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const userRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(userRef)

      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }
      navigate('/')
    } catch (error) {
      toast.error('Fail')
    }
  }

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === '/join' ? 'Up' : 'In'} with</p>
      <button className="socialIconDiv" onClick={handleClick}>
        <img className="socialIconImg" src={googleIcon} alt="" />
      </button>
    </div>
  )
}

export default OAuth
