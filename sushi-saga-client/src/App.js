import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = 'http://localhost:3000/sushis';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushi: [],
      eaten: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((sushi) => this.setState({ sushi }));
  }

  eatSushi = (id) => {
    this.setState({
      eaten: [...this.state.eaten, this.state.sushi.find((e) => e.id === id)],
    });
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
        <Table plates={this.state.eaten} />
      </div>
    );
  }
}

export default App;
