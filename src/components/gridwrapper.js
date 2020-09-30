import React from 'react';
import GridBox from './gridbox'

export default class GridWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGame: this.props.currentGame
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { currentGame: props.currentGame };
  }

  createGrids() {
    const boxes = [];
    let id = 0;

    this.state.currentGame.forEach(item => {
      if (typeof (item.wordSeq) !== 'undefined') {
        item.wordSeq.forEach(wSeq => {
          boxes.push(<GridBox id={id} wSeq={wSeq} />);
          id++;
        });
      }
    });

    return boxes;
  }

  render() {
    return (
      <div className='GridWrapper'>{this.createGrids()}</div>
      // <div className='GridWrapper'>Hello</div>
    );
  }
}