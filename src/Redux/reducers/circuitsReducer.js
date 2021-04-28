import { SET_CIRCUITS } from '../types/index';

const circuitsReducer = (state = [], action) => {
    switch(action.type) {
        case SET_CIRCUITS:
            return action.payload;
        default:
            return state;
    }
}

export default circuitsReducer;