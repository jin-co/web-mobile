import React, { useContext, useEffect } from 'react'
import GitContext from '../context/git/GitContext'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Spinner } from '../components/layout/Spinner'
import { useParams } from 'react-router-dom'

export const User = () => {
  const params = useParams()
  const { getUser, user, loading, repos, getRepos } = useContext(GitContext)

  useEffect(() => {
    console.log(params)
  }, [])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user
  return (
    <div>User</div>
  )
}
