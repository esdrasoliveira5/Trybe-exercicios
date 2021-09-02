import './App.css';
import React from 'react';

function logPress() {
  console.log('PRESS');
}

class App extends React.Component {
  render() {
    return (
      <button onClick={logPress}>Button</button>
    );
  }
}

export default App;
