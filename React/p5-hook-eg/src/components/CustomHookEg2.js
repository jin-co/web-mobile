import React from 'react'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import useLocalStroage from '../hooks/useLocalStroage'

const CustomHookEg2 = () => {
  const [task, setTask] = useLocalStroage('task', '')
  const [tasks, setTasks] = useLocalStroage('tasks', [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const taskObj = {
      task,
      completed: false,
      date: new Date().toISOString(),
    }

    setTasks([...tasks, taskObj])
  }

  return (
    <div>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Task
          </label>
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </div>
  )
}

export default CustomHookEg2
