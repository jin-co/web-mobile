import "./App.css";
import Header from "./components/shared/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doc", day: Date(), reminder: true },
    { id: 2, text: "Meeting", day: Date(), reminder: true },
    { id: 3, text: "Food", day: Date(), reminder: false },
    { id: 4, text: "Beverage", day: Date(), reminder: false },
  ]);

  const name = "brad";

  //delete
  const deleteTask = (id) => {
    console.log("delete");
    setTasks(tasks.filter((t) => t.id !== id));
  };

  //toggle
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...tasks, reminder: !t.reminder } : t))
    );
  };

  return (
    <div className="App">
      <Header title="wow" />
      <AddTask />

      <h1>hello</h1>
      <p>{name}</p>
      {tasks.length > 0 ? (
        <Tasks task={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Nothing"
      )}
    </div>
  );
}

// import React from 'react';
// class App extends React.Component {
//   render() {
//     return <h1>what</h1>
//   }
// }

export default App;
