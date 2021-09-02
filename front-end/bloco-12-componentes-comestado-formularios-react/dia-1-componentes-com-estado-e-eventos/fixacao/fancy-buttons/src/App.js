import './App.css';
import React from 'react';

function logPress1() {
  console.log('PRESS11');
}

function logPress2() {
  console.log('PRESS22');
}
function logPress3() {
  console.log('PRESS33');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={logPress1}>Button1</button>
        <button onClick={logPress2}>Button2</button>
        <button onClick={logPress3}>Button3</button>
      </div>
    );
  }
}

export default App;
