import './App.css'
import Header from './components/shared/Header'
import Tasks from './components/Tasks'
import { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const url = process.env.REACT_APP_URL + 'tasks/'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setTasks(data)
    console.log(data)
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(url + id)
    const data = await res.json()
    return data
  }

  const [showAddTask, setShowAddTask] = useState(false)

  const name = 'brad'

  //delete
  const deleteTask = async (id) => {
    await fetch(url + id, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((t) => t.id !== id))
  }

  //toggle
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })
    const data = await res.json()
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...tasks, reminder: data.reminder } : t
      )
    )
  }

  //add task
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 10000) + 1;
  //   const newTask = { id, ...task };
  //   setTasks([...tasks, newTask]);
  // };

  const addTask = async (task) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }

  return (
    <Router>
      <div className="App">
        <Header
          title="wow"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}

        <h1>hello</h1>
        <p>{name}</p>
        {/* {tasks.length > 0 ? (
          <Tasks task={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          "Nothing"
        )} */}
        <Routes>
          <Route
            path="/"
            exact
            render={(props) => {
              ;<>
                {tasks.length > 0 ? (
                  <Tasks
                    task={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'Nothing'
                )}
              </>
            }}
          />
          <Route path="/about" component={About} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
