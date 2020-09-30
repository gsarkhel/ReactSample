import React from 'react';

export default class GridBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      wSeq: {}
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props.wSeq);
    return { wSeq: props.wSeq, id: props.id };
  }

  render() {
    return (
      <div id={this.state.id} className='GridBox' style={{
        left: `${this.state.wSeq.left}px`,
        top: `${this.state.wSeq.top}px`,
        width: `${this.state.wSeq.width}px`,
        height: `${this.state.wSeq.height}px`,
      }}>{this.state.wSeq.key}</div>
    );
  }
}