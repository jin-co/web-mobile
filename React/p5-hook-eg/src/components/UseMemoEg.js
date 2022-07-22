import React from 'react'
import { useState, useEffect, useRef, useMemo } from 'react'

const UseMemoEg = () => {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)
  const renders = useRef(1)
  // const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number), [number])

  const handleClick = () => {
    setInc((prev) => {
      return prev + 1
    })
  }

  useEffect(() => {
    renders.current = renders.current + 1
  })

  return (
    <div>
      <input
        type="number"
        className="form-control w-25"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2 className="my-3">
        sqr of {number} is {sqrt}
      </h2>
      <button className="btn btn-primary" onClick={handleClick}>
        Rerender
      </button>
      <h3>{renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i)
  }
  console.log('expensive function call: ')
  return Math.sqrt(n)
}

export default UseMemoEg
