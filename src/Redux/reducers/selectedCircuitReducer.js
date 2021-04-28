import { SET_SELECTED_CIRCUIT } from '../types/index';

const selectedCircuitReducer = (state = [], action) => {
    switch(action.type) {
        case SET_SELECTED_CIRCUIT:
            return action.payload
        default:
            return state;
    }
}

export default selectedCircuitReducer;