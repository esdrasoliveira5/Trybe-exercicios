import './App.css';
import pokemons from './data';
import Pokedex from './componentes/Pokedex';

function App() {
  return (
    <main className="main">
      <h1>POKEDEX</h1>
      <Pokedex pokes ={pokemons}/>
    </main>
  );
}

export default App;
