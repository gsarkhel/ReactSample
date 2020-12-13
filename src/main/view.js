import React from 'react';
import GridWrapper from '../components/gridwrapper';
import ClueWrapper from '../components/cluewrapper'
import '../css/index.scss';

export default class View extends React.Component {
    render() {
        return (
            <div className='crossword'>
                <GridWrapper gameObj={this.props.gameObj} />
                <ClueWrapper gameObj={this.props.gameObj} />
            </div>
        );
    }
}
