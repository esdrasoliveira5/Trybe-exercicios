import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const { poke: { name, type, averageWeight:{ value, measurementUnit: unit }, image}} = this.props
    return (
      <div className="pokemon">
        <div>Name: {name}</div>
        <div>Type: {type}</div>
        <div>Average Weight: {value}{unit}</div>
        <img src={image} alt="imagen do pokemon"></img>
      </div>
    );
  }
}

Pokemon.propsType = {
  poke: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired
    }).isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Pokemon;