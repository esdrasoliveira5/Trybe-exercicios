import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component {
  render () {
    const { pokes } = this.props
    return (
      <div className="pokedex">
        {pokes.map((p) => <Pokemon poke={p} />)}
      </div>
    );
  }
}

export default Pokedex;