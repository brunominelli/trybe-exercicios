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
    }), () => {
      console.log(this.setButtonColor(this.state.buttonOneClicks));
    });
  };

  buttonTwo() {
    this.setState(({ buttonTwoClicks }) => ({
      buttonTwoClicks: buttonTwoClicks + 1,
    }), () => {
      console.log(this.setButtonColor(this.state.buttonTwoClicks));
    });
  };

  buttonThree() {
    this.setState(({ buttonThreeClicks }) => ({
      buttonThreeClicks: buttonThreeClicks + 1,
    }), () => {
      console.log(this.setButtonColor(this.state.buttonThreeClicks));
    });
  };

  setButtonColor(number) {
    return number % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { buttonOneClicks, buttonTwoClicks, buttonThreeClicks } = this.state;
    return (
      <>
        <button onClick={ this.buttonOne } style={{ backgroundColor: this.setButtonColor(buttonOneClicks) }} >{ buttonOneClicks }</button>
        <button onClick={ this.buttonTwo } style={{ backgroundColor:this.setButtonColor(buttonTwoClicks) }} >{ buttonTwoClicks }</button>
        <button onClick={ this.buttonThree } style={{ backgroundColor:this.setButtonColor(buttonThreeClicks) }} >{ buttonThreeClicks }</button>
      </>
    );
  }
}

export default App;
