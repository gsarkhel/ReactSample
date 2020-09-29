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

  getGrids() {
    const boxes = [];
    if (typeof (this.state.currentGame.across) !== 'undefined') {
      this.state.currentGame.across.forEach(() => {
        boxes.push(<GridBox />);
      });
    }
    return boxes;
  }

  render() {
    return (
      // <div className='GridWrapper'>{this.getGrids()}</div>
      <div className='GridWrapper'>Hello</div>
    );
  }
}