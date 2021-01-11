import React from 'react';
// import { connect } from 'react-redux';
import GameLogic from './gamelogic';
// import GridWrapper from '../components/gridwrapper';
import ClueWrapper from '../components/cluewrapper';
import '../css/index.scss';
// import GameLogic from './gamelogic';

export default class App extends React.Component {

    render() {
        return (
            <div className='crossword'>
                <GameLogic />
                {/* <GridWrapper gameObj={this.props.gameObj} /> */}
                <ClueWrapper />
            </div>
        );
    }
}