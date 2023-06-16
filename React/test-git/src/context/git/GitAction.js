import axios from "axios"

const url = process.env.REACT_APP_URL

const gitBase = axios.create({
  baseURL: url
})

export const getUsers = async (text) => {
  const res = await gitBase.get(`search/users?q=${text}`)        
  return res.data.items
}

export const getUser = async (login) => {
  const [user, repos] = await Promise.all([
    gitBase.get('users/' + login),
    gitBase.get(`users/${login}/repos`),
  ])    
  return {
    user:user.data,
    repos:repos.data
  }
}