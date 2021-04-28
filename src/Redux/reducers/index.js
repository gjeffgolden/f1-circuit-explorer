import { combineReducers } from 'redux';
import circuitsReducer from './circuitsReducer';

const rootReducer = combineReducers({circuitsReducer});

export default rootReducer;