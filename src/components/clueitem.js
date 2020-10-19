import React from 'react';

export default class ClueItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      clue: '',
      clickEvent: () => { }
    }
    // this.clickEvent = this.clickEvent.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return { clue: props.clue, id: props.id, clickEvent: props.onClick };
  }

  // clickEvent(e) {
  //   if(this.state && this.state.clickEvent) {
  //     this.state.clickEvent(this.state);
  //   }
  // }

  render() {
    return (
      <div id={this.state.id} className='ClueItem'>{this.state.clue}</div>
    );
  }
}