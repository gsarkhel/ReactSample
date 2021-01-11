import { createStore } from 'redux';
import gameData from './data/gamedata.json';
import GlobalReducer from './main/globalreducer';

export default createStore(GlobalReducer, gameData);