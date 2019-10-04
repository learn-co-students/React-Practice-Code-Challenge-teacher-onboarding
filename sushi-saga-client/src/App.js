import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    money: 100,
    sushi: [],
    sushiIndex: 0
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(json => this.setState({sushi: json}))
    this.setState({
      sushi: this.state.sushi.map(sushi => {return {...sushi, eaten: false}})
    });
  };

  handleClickEatSushi = (eatenSushi) => {
    if (this.state.money > eatenSushi.price) {
      let sushiArray = this.state.sushi.map(sushi => {
        if (sushi.id === eatenSushi.id) {
          sushi.eaten = true
          return sushi
        } else {
          return sushi
        }})
      this.setState({
        money: this.state.money - eatenSushi.price,
        sushi: sushiArray
      });
    } else {
      return;
    };
  };

  handleClickMore = () => {
    this.setState({
      sushiIndex: this.state.sushiIndex + 4
    });
  };

  getSushi = () => {
    let sushiArray = this.state.sushi.slice(this.state.sushiIndex, this.state.sushiIndex + 4);
    return sushiArray;
  };

  getEmptyPlates = () => this.state.sushi.filter(sushi => sushi.eaten);

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushi={this.getSushi()} 
          handleClickEatSushi={this.handleClickEatSushi}
          handleClickMore={this.handleClickMore}
        />
        <Table moneyLeft={this.state.money} plates={this.getEmptyPlates()} />
      </div>
    );
  }
}

export default App;