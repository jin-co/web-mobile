import { useRef, useEffect, useState } from 'react'

export const App = () => {
  const text = useRef('')    
  const [input, setInput] = useState('')

  useEffect(() => {
    text.current = input
  }, [input])
  return (
    <div>
      <p>{text.current}</p>   
      <input type="text" onChange={(e) => setInput(e.target.value)} />   
    </div>
  )
}
