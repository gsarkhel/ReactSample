import React from 'react';
import View from './view';
import gameData from '../data/gamedata.json';
import GameLogic from './gamelogic'

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.gameLogic = new GameLogic({ gameData });
    this.state = {
      currentGame: {}
    }
  }

  componentDidMount() {
    this.setGame();
  }

  setGame() {
    this.setState({
      currentGame: this.gameLogic.setGame()
    });
  }

  render() {
    return (
      <View currentGame={this.state.currentGame} />
    );
  }
}
