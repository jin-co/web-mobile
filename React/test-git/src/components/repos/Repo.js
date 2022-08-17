import React from 'react'
import RepoItem from './RepoItem'

const Repo = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <RepoItem key={repo.id} item={repo} />
      ))}
    </div>
  )
}

export default Repo
