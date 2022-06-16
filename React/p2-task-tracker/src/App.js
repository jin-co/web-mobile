import "./App.css";
import Header from "./components/shared/Header";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([
    // { id: 1, text: "Doc", day: Date(), reminder: true },
    // { id: 2, text: "Meeting", day: Date(), reminder: true },
    // { id: 3, text: "Food", day: Date(), reminder: false },
    // { id: 4, text: "Beverage", day: Date(), reminder: false },
  ]);

  useEffect(() => {
    // const fetchTasks = async () => {
    //  const res = await fetch('http://localhost:3000/tasks')
    //  const data = await res.json()
    //  return data
    // }
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const [showAddTask, setShowAddTask] = useState(false);

  const name = "brad";

  //delete
  const deleteTask = async (id) => {
    console.log("delete");
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((t) => t.id !== id));
  };

  //toggle
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...tasks, reminder: data.reminder } : t
      )
    );
  };

  //add task
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 10000) + 1;
  //   const newTask = { id, ...task };
  //   setTasks([...tasks, newTask]);
  // };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

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
        <Route
          path="/"
          exact
          render={(props) => {
            <>
              {tasks.length > 0 ? (
                <Tasks
                  task={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "Nothing"
              )}
            </>;
          }}
        ></Route>
        <Route path="/about" component={About}></Route>
        <Footer />
      </div>
    </Router>
  );
}

// import React from 'react';
// class App extends React.Component {
//   render() {
//     return <h1>what</h1>
//   }
// }

export default App;
