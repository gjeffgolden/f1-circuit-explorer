import { combineReducers } from 'redux';
import circuitsReducer from './circuitsReducer';
import selectedCircuitReducer from './selectedCircuitReducer';

const rootReducer = combineReducers({
    circuitsReducer,
    selectedCircuitReducer
});

export default rootReducer;