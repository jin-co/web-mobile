import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Todo = () => {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})
  const isMounted = useRef(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTodo(data)
          setLoading(false)
        }, 2000)
      })
  }, [])

  return loading ? <h3>Loading...</h3> : <h3>{todo.title}</h3>
}

export default Todo
