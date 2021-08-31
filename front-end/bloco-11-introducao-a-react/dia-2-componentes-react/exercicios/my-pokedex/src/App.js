import './App.css';
import pokemons from './data';
import Pokedex from './componentes/Pokedex';

function App() {
  return (
    <div>
      <Pokedex pokes ={pokemons}/>
    </div>
  );
}

export default App;
