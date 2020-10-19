import React from 'react';
import ClueItem from './clueitem'

export default class ClueWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGame: this.props.currentGame
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props.currentGame);
    return { currentGame: props.currentGame };
  }

  createClues() {
    const clues = [];
    let id = 0;

    this.state.currentGame.forEach(item => {
      if (typeof (item.clue) !== 'undefined') {
        clues.push(<ClueItem key={id} id={id} clue={item.clue} onClick={this.clickEvent} />);
        id++;
      }
    });

    return clues;
  }

  render() {
    return (
      <div className='ClueWrapper'><div className='ClueHold'>{this.createClues()}</div></div>
    );
  }
}