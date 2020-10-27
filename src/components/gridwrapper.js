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

    Object.keys(this.props.gameBoxes).forEach((item, index) => {
      console.log(item);
      if (typeof (item.wordSeq) !== 'undefined') {
        item.wordSeq.forEach(wSeq => {
          let alreadyCreated = null;
          // boxes.forEach(box => {
          //   if (box.props.wSeq.x === wSeq.x && box.props.wSeq.y === wSeq.y) {
          //     alreadyCreated = box;
          //     box.props.dIndex = index;
          //     // console.log(box.props.index);
          //   }
          // });
          if (alreadyCreated === null) {
            if (item.type === 'across') {
              wSeq.ref = <GridBox key={id} aIndex={index} dIndex={null} wSeq={wSeq} onClick={this.clickEvent} />;
            } else {
              wSeq.ref = <GridBox key={id} aIndex={null} dIndex={index} wSeq={wSeq} onClick={this.clickEvent} />;
            }
          }
          boxes.push(wSeq.ref);
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
    );
  }
}