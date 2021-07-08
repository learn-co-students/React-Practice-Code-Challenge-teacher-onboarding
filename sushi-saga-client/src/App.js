import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = 'http://localhost:3000/sushis';
const START_MONEY = 100;

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushi: [],
      moneyLeft: START_MONEY,
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((sushi) => this.setState({ sushi }));
  }

  eatSushi = (item) => {
    const moneyLeft = this.state.moneyLeft - item.price;

    if (moneyLeft >= 0) {
      this.setState({
        moneyLeft,
        sushi: this.state.sushi.map((piece) => {
          if (piece.id === item.id) {
            piece.eaten = true;
          }
          return piece;
        }),
      });
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} eatSushi={this.eatSushi} />
        <Table
          plates={this.state.sushi.filter((e) => e.eaten)}
          money={this.state.moneyLeft}
        />
      </div>
    );
  }
}

export default App;
