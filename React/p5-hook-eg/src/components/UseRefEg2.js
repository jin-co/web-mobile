import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

const UseRefEg2 = () => {
  const [name, setName] = useState('')
  const renders = useRef(1)
  const prevName = useRef('')
  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])
  return (
    <div>
      <h1>{renders.current}</h1>
      <h2>Previous Name: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default UseRefEg2
