import React from 'react';
import GridWrapper from '../components/gridwrapper';
import ClueWrapper from '../components/cluewrapper'
import '../css/index.scss';

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGame: this.props.currentGame
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { currentGame: props.currentGame };
    }

    render() {
        return (
            <div className='crossword'><GridWrapper currentGame={this.state.currentGame} /><ClueWrapper /></div>
        );
    }
}
