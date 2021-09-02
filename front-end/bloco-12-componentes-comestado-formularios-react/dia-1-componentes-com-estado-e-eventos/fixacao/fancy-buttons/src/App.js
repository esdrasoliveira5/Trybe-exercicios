import './App.css';
import React from 'react';



class App extends React.Component {
  constructor() {
    super()
    this.logPress1 = this.logPress1.bind(this)
  }


  logPress1() {
    console.log('PRESS11');
    console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.logPress1}>Button1</button>
      </div>
    );
  }
}

export default App;
