import React from 'react';

export default class GridBox extends React.Component {
  constructor(props) {
    super(props);
    this.dimen = 25;
  }
  render() {
    const left = `${(this.props.pos.x - 1) * this.dimen}px`;
    const top = `${(this.props.pos.y - 1) * this.dimen}px`;
    return (
      <div id={this.props.id} className='GridBox' style={{
        left,
        top,
        width: `${this.dimen}px`,
        height: `${this.dimen}px`,
      }} onClick={(e) => { this.props.onClick(this.props) }} />
      // <div id={this.props.id} className='GridBox' style={{
      //   left: `${this.props.wSeq.left}px`,
      //   top: `${this.props.wSeq.top}px`,
      //   width: `${this.props.wSeq.width}px`,
      //   height: `${this.props.wSeq.height}px`,
      // }} onClick={(e) => { this.props.onClick(this.props) }}>{this.props.wSeq.key}</div>
    );
  }
}