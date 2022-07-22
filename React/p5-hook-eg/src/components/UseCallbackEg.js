import React from 'react'
import { useState, useCallback } from 'react'

const UseCallbackEg = () => {
  const [tasks, setTasks] = useState([])
  const addTask = useCallback(() => {
    setTasks((prev) => [...prev, 'new task'])
  }, [setTasks])
  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>
          {index}
          {task}
        </p>
      ))}
    </div>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log('rendered')
  return (
    <button className="btn" onClick={addTask}>
      Add
    </button>
  )
})
export default UseCallbackEg
