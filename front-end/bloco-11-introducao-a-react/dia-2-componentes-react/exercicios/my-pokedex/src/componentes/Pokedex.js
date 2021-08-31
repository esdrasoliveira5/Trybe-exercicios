import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component {
  render () {
    const { pokes } = this.props
    return (
      <div className="pokedex">
        <h1>POKEDEX</h1>
        {pokes.map((p) => <Pokemon poke={p} />)}
      </div>
    );
  }
}

export default Pokedex;