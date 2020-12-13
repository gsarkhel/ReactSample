import React from 'react';
import View from './view';
import GameLogic from './gamelogic'
import gameData from '../data/gamedata.json';

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.gameLogic = new GameLogic({ gameData });
    this.state = {
      gameObj: {
        gameArray: []
      }
    }
  }

  componentDidMount() {
    this.setGame();
  }

  setGame() {
    const gameObj = this.gameLogic.getGame();
    this.setState({
      gameObj: gameObj
    });
  }

  render() {
    return (
      <View gameObj={this.state.gameObj} />
    );
  }
}
