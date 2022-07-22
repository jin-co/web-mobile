import React from 'react'
import useFetch from '../hooks/useFetch'

const CustomHookEg1 = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  )

  if (loading) {
    return <h3>loading...</h3>
  } else {
    return (
      <div>
        {data.map((post) => (
          <h3 key={post.id}>{post.title}</h3>
        ))}
      </div>
    )
  }
}

export default CustomHookEg1
