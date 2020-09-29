import React from 'react';
import View from './view';
import GameData from '../data/gamedata.json';

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGame: {}
    }
  }

  componentDidMount() {
    this.setGame();
  }

  setGame() {
    this.setState({
      currentGame: GameData.crosswords[0]
    });
  }

  render() {
    return (
      <View currentGame={this.state.currentGame} />
    );
  }
}
