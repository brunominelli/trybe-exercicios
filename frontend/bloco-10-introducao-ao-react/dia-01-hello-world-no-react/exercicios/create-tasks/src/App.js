import './App.css';

const taskList = ['Cortar o cabelo', 'Fazer a barba', 'Comprar um monitor novo'];

const Task = (...value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {taskList.map((task) => Task(task))}
    </ul>
  );
}

export default App;
