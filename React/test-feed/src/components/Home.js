import React from 'react'
import { useState } from 'react'

export const Home = () => {
  const [post, setPost] = useState(1)

  console.log(post);

  function updatePost() {
    setPost((pre) => {
      return pre + 1
    })
  }

  return (
    <>
      <button onClick={updatePost}>Update</button>
    </>
  )
}
