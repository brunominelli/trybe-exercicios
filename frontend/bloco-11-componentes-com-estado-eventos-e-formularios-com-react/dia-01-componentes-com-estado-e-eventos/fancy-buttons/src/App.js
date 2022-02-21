import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    
    this.buttonOne = this.buttonOne.bind(this);
    this.buttonTwo = this.buttonTwo.bind(this);
    this.buttonThree = this.buttonThree.bind(this);
    
    this.state = {
      buttonOneClicks: 0,
      buttonTwoClicks: 0,
      buttonThreeClicks: 0,
    };
  }

  buttonOne() {
    this.setState(({ buttonOneClicks }) => ({
      buttonOneClicks: buttonOneClicks + 1,
    }));
  };

  buttonTwo() {
    this.setState(({ buttonTwoClicks }) => ({
      buttonTwoClicks: buttonTwoClicks + 1,
    }));
  };

  buttonThree() {
    this.setState(({ buttonThreeClicks }) => ({
      buttonThreeClicks: buttonThreeClicks + 1,
    }));
  };

  render() {
    return (
      <>
        <button onClick={ this.buttonOne }>{ this.state.buttonOneClicks }</button>
        <button onClick={ this.buttonTwo }>{ this.state.buttonTwoClicks }</button>
        <button onClick={ this.buttonThree }>{ this.state.buttonThreeClicks }</button>
      </>
    );
  }
}

export default App;
