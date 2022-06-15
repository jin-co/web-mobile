import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header';

function App() {
  const name = 'brad'

  return (
    <div className="App">
      <Header title='wow' />
      <h1>hello</h1>
      <p>{name}</p>
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