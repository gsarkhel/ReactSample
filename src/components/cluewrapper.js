import React from 'react';
import { connect } from 'react-redux';
import ClueItem from './clueitem'

class ClueWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    console.log('onClick Clue', e);
  }

  createClues() {
    const clues = [];
    let id = 0;
    this.props.gameObj.gameArray.forEach(item => {
      if (typeof (item.clue) !== 'undefined') {
        clues.push(<ClueItem key={id} id={id} clue={item.clue} onClick={this.clickEvent} />);
        id++;
      }
    });

    return clues;
  }

  render() {
    return (
      // <div className='ClueWrapper'><div className='ClueHold'>{this.createClues()}</div></div>
      <div className='ClueWrapper'><div className='ClueHold'>{this.props.title}</div></div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('clue', state);
  return {
    title: state.title
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setTitle: (title) => {
//       dispatch({
//         type: 'SET_TITLE',
//         payload: title
//       })
//     }
//   };
// };

export default connect(mapStateToProps)(ClueWrapper);