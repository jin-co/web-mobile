import React, { createContext } from 'react'
import { useEffect, useState } from 'react'

const url = process.env.REACT_APP_URL + 'tasks/'

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      console.log('tasksFromServer: ', tasksFromServer)
      setTasks(tasksFromServer)
      console.log('tasks: ', tasks)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }
  return (
    <TaskContext.Provider value={{

    }}>
      {children}
    </TaskContext.Provider>
  )
}


export default TaskContext