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
      // console.log(this.props.gameObj.boxObj);
      const mX = this.props.gameObj.maxX + this.props.gameObj.offsetX - 1;
      const mY = this.props.gameObj.maxY + this.props.gameObj.offsetY - 1;
      for (let xi = 1; xi <= mX; xi++) {
        for (let yi = 1; yi <= mY; yi++) {
          // console.log(xi, yi, this.props.gameObj.boxObj[`${xi}_${yi}`]);
          if (typeof (this.props.gameObj.boxObj[`${xi}_${yi}`]) !== 'undefined') {
            boxes.push(<GridBox key={id} pos={{ x: xi, y: yi }} linkData={this.props.gameObj.boxObj[`${xi}_${yi}`]} onClick={this.clickEvent} />);
          } else {
            boxes.push(<GridBox key={id} pos={{ x: xi, y: yi }} />);
          }
          id++;
        }
      }
    }

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