import React from 'react';

class Pokemon extends React.Component {
  render () {
    const { name, type, averageWeight:{ value, measurementUnit: unit }, image } = this.props.poke

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

export default Pokemon;