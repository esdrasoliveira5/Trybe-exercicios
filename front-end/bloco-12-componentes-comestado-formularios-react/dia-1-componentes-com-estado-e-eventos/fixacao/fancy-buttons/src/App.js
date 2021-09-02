import './App.css';
import React from 'react';



class App extends React.Component {
  constructor() {
    super()
    this.logPress1 = this.logPress1.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  logPress1(string) {
    console.log('PRESS11');
    this.setState((s,_p) => ({
      numeroDeCliques: s.numeroDeCliques + 1
    }))
    console.log(string + this.state.numeroDeCliques);
  }

  render() {
    return (
      <div>
        <button onClick={()=> this.logPress1('LaMERDA')}>Botao Cliques: {this.state.numeroDeCliques}</button>
      </div>
    );
  }
}

export default App;
