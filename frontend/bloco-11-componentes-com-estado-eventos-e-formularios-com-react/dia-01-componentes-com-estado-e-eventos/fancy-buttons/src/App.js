import './App.css';

const firstButtonClick = () => console.log('Você clicou no primeiro botão');
const secondButtonClick = () => console.log('Você clicou no segundo botão');
const thirdButtonClick = () => console.log('Você clicou no terceiro botão');

function App() {
  return (
    <>
      <button onClick={ firstButtonClick }>Primeiro Botão</button>
      <button onClick={ secondButtonClick }>Segundo Botão</button>
      <button onClick={ thirdButtonClick }>Terceiro Botão</button>
    </>
  );
}

export default App;
