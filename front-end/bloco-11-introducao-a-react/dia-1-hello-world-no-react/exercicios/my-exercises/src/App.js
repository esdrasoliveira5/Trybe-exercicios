import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['dancar', 'beber', 'curtir', 'viver'];

function App() {
  return (
    <div>
      { compromissos.map((compromiso) => Task(compromiso)) }
    </div>
  );
}

export default App;
