import React from "react";
import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doc", day: Date(), reminder: true },
    { id: 2, text: "Meeting", day: Date(), reminder: true },
    { id: 3, text: "Food", day: Date(), reminder: false },
    { id: 4, text: "Beverage", day: Date(), reminder: false },
  ]);

  return (
    <>
      {tasks.map((task) => {
        <h3 key={task.id}>{task.text}</h3>;
      })}
    </>
  );
};

export default Tasks;
