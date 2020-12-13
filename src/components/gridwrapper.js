import React from 'react';
import GridBox from './gridbox'

export default class GridWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  createGrids() {
    const boxes = [];
    let id = 0;

    if (typeof (this.props.gameObj.maxX) !== 'undefined') {
      console.log(this.props.gameObj);
      for (let xi = 1; xi <= this.props.gameObj.maxX + this.props.gameObj.offsetX; xi++) {
        for (let yi = 1; yi <= this.props.gameObj.maxY + this.props.gameObj.offsetY; yi++) {
          // console.log(xi, yi);
          boxes.push(<GridBox key={id} pos={{ x:xi, y:yi }} onClick={this.clickEvent} />);
          id++;
        }
      }
    }

    const refObj = {};
    this.props.gameObj.gameArray.forEach(item => {
      console.log(item);
    });

    return boxes;
  }

  clickEvent(e) {
    console.log('onClick Grid', e);
  }

  render() {
    return (
      <div className='GridWrapper'>{this.createGrids()}</div>
    );
  }
}