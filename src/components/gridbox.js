import React from 'react';

export default class GridBox extends React.Component {
  constructor(props) {
    super(props);
    this.dimen = 25;
  }

  onClickFn(props) {
    // console.log(props);
    if (typeof (props.linkData) !== 'undefined') {
      props.onClick(props);
    }
  }

  render() {
    const left = `${(this.props.pos.x - 1) * this.dimen}px`;
    const top = `${(this.props.pos.y - 1) * this.dimen}px`;
    // console.log(this.props.linkData);
    // let text = '';
    let classStr = '';
    if (typeof (this.props.linkData) !== 'undefined') {
      // text = this.props.linkData[0].item;
      classStr = 'show';
    }
    return (
      <div id={this.props.id} className={`GridBox ${classStr}`} style={{
        left,
        top,
        width: `${this.dimen}px`,
        height: `${this.dimen}px`,
      }} onClick={(e) => { this.onClickFn(this.props) }} />
    );
  }
}