import React from 'react';
import GridWrapper from '../components/gridwrapper';
import ClueWrapper from '../components/cluewrapper'
import '../css/index.scss';

export default class View extends React.Component {
    render() {
        return (
            <div className='crossword'>
                <GridWrapper gameBoxes={this.props.gameBoxes} />
                <ClueWrapper gameArray={this.props.gameArray} />
            </div>
        );
    }
}
