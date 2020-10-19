import React from 'react';

export default class ClueItem extends React.Component {

  render() {
    return (
      <div id={this.props.id} className='ClueItem' onClick={(e) => { this.props.onClick(e) }}>
        {this.props.clue}
      </div>
    );
  }
}