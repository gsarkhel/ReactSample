import React from 'react';

export default class GridBox extends React.Component {
  render() {
    return (
      <div id={this.props.id} className='GridBox' style={{
        left: `${this.props.wSeq.left}px`,
        top: `${this.props.wSeq.top}px`,
        width: `${this.props.wSeq.width}px`,
        height: `${this.props.wSeq.height}px`,
      }} onClick={(e) => { this.props.onClick(this.props) }}>{this.props.wSeq.key}</div>
    );
  }
}