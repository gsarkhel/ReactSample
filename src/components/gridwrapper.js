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
    const boxes = this.getGrids();
    return (
      <div className='GridWrapper'>{boxes}</div>
    );
  }
}