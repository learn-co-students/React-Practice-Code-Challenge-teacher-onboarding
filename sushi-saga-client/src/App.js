import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Sushi from './components/Sushi';

// Endpoint!
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

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} />
        <Table />
      </div>
    );
  }
}

export default App;
