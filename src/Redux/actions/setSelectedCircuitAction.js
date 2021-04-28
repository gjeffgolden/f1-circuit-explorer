import { SET_SELECTED_CIRCUIT } from '../types/index';

const setSelectedCircuitAction = (circuit) => ({
    type: SET_SELECTED_CIRCUIT,
    payload: circuit
})

export default setSelectedCircuitAction;