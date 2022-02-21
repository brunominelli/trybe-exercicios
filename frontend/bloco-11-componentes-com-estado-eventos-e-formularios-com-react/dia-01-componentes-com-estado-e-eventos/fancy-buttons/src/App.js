import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.firstButtonClick = this.firstButtonClick.bind(this);
    this.secondButtonClick = this.secondButtonClick.bind(this);
    this.thirdButtonClick = this.thirdButtonClick.bind(this);
  }

  firstButtonClick = () => console.log('Você clicou no primeiro botão');
  secondButtonClick = () => console.log('Você clicou no segundo botão');
  thirdButtonClick = () => console.log('Você clicou no terceiro botão');

  render() {
    return (
      <>
        <button onClick={ this.firstButtonClick }>Primeiro Botão</button>
        <button onClick={ this.secondButtonClick }>Segundo Botão</button>
        <button onClick={ this.thirdButtonClick }>Terceiro Botão</button>
      </>
    );
  }
}

export default App;
