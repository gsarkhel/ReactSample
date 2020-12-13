import React from 'react';
import ClueItem from './clueitem'

export default class ClueWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    console.log('onClick Clue', e);
  }

  createClues() {
    const clues = [];
    let id = 0;
    this.props.gameObj.gameArray.forEach(item => {
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