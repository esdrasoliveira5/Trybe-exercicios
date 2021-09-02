import './App.css';
import React from 'react';



class App extends React.Component {
  constructor() {
    super()
    this.logPress1 = this.logPress1.bind(this)
    this.state = {
      numeroDeCliques: 0,
      backgroundColor: ''
    }
  }

  logPress1(string) {
    console.log('PRESS11');
    this.setState((estadoAnterior,_p) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    if(this.state.numeroDeCliques % 2 === 0) {
      this.setState((s, _p) => ({
        backgroundColor: s.backgroundColor = 'green'
      }))
    } else {
      this.setState((s, _p) => ({
        backgroundColor: s.backgroundColor = ''
      }))
    }
    console.log(this.state.backgroundColor);
  }

  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.state.backgroundColor}} onClick={()=> this.logPress1('LaMERDA')}>Botao Cliques: {this.state.numeroDeCliques}</button>
      </div>
    );
  }
}

export default App;
