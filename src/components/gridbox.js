import React from 'react';

export default class GridBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      wSeq: {},
      clickEvent: () => { }
    }
    // this.clickEvent = this.clickEvent.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(props);
    return { wSeq: props.wSeq, id: props.id, clickEvent: props.onClick };
  }

  // clickEvent(e) {
  //   if (this.state && this.state.clickEvent) {
  //     this.state.clickEvent(this.state);
  //   }
  // }

  render() {
    return (
      <div id={this.state.id} className='GridBox' style={{
        left: `${this.state.wSeq.left}px`,
        top: `${this.state.wSeq.top}px`,
        width: `${this.state.wSeq.width}px`,
        height: `${this.state.wSeq.height}px`,
      }} onClick={(e) => { this.props.onClick(e) }}>{this.state.wSeq.key}</div>
    );
  }
}