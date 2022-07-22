import React from 'react'
import { useRef } from 'react'

const UseRefEg1 = () => {
  const inputRef = useRef()
  const paraRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    inputRef.current.value = 'wow'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'good'
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control mb-2"
          ref={inputRef}
        />
        <button type="submit" className="btn">
          Submit
        </button>
        <p ref={paraRef} onClick={() => inputRef.current.focus()}></p>
      </form>
    </div>
  )
}

export default UseRefEg1
