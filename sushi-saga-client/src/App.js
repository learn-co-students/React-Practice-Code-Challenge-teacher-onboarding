import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = 'http://localhost:3000/sushis';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushi: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((sushi) => this.setState({ sushi }));
  }

  eatSushi = (id) => {
    this.setState({
      sushi: this.state.sushi.map((piece) => {
        if (piece.id === id) {
          piece.eaten = true;
        }
        return piece;
      }),
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} eatSushi={this.eatSushi} />
        <Table />
      </div>
    );
  }
}

export default App;
