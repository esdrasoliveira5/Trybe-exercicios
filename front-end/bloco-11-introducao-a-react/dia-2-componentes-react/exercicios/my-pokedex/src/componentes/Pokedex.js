import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render () {
    const { pokes } = this.props
    return (
      <div className="pokedex">
        {pokes.map((p) => <Pokemon key={p.name} poke={p} />)}
      </div>
    );
  }
}

Pokedex.propsType = {
  pokes: PropTypes.arrayOf(PropTypes.object),
};

export default Pokedex;