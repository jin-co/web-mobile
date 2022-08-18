import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import GithubContext from '../context/github/GithubContext'

const User = () => {
  const { user, searchUser } = useContext(GithubContext)
  const params = useParams()

  useEffect(() => {
    console.log(params.login)
    searchUser(params.login)
  }, [])

  return <div>user</div>
}

export default User
