import { SET_CIRCUITS } from '../types/index';

const setCircuitsAction = (circuits) => ({
    type: SET_CIRCUITS,
    payload: circuits
})

export default setCircuitsAction;