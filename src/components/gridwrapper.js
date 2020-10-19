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

    this.props.currentGame.forEach(item => {
      if (typeof (item.wordSeq) !== 'undefined') {
        item.wordSeq.forEach(wSeq => {
          boxes.push(<GridBox key={id} id={id} wSeq={wSeq} onClick={this.clickEvent}/>);
          id++;
        });
      }
    });

    return boxes;
  }

  clickEvent(e) {
    console.log('onClick Grid', e);
  }

  render() {
    return (
      <div className='GridWrapper'>{this.createGrids()}</div>
      // <div className='GridWrapper'>Hello</div>
    );
  }
}