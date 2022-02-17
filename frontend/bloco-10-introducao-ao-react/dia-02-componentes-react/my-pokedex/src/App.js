import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <section className='App'>
      <h1>Pokedéx</h1>
      <Pokedex pokemons={pokemons} />
    </section>
  );
}

export default App;
