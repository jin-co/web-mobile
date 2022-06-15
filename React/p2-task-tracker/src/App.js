import './App.css';
import Header from './components/shared/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doc", day: Date(), reminder: true },
    { id: 2, text: "Meeting", day: Date(), reminder: true },
    { id: 3, text: "Food", day: Date(), reminder: false },
    { id: 4, text: "Beverage", day: Date(), reminder: false },
  ]);

  const name = 'brad'

  return (
    <div className="App">
      <Header title='wow' />
      <h1>hello</h1>
      <p>{name}</p>
      <Tasks task={tasks} />
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