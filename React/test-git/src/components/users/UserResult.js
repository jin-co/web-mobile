import { useContext } from 'react'
import GitContext from '../../context/git/GitContext'
import { UserItem } from './UserItem'
import {Spinner} from '../layout/Spinner'

export const UserResult = () => {
  const { users, isLoading } = useContext(GitContext)
  if(isLoading) {
    return <Spinner/>
  }
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map(u => (
        <UserItem key={u.id} user={u} />
      ))}
    </div>
  )
}
