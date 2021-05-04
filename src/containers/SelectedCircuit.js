import React, { useContext } from 'react'
import SelectedCircuitCard from '../components/SelectedCircuitCard'
import CircuitDetails from '../components/CircuitDetails'
import { SelectedCircuitContext } from "../App";

export default function SelectedCircuit() {

    const selectedCircuit = useContext(SelectedCircuitContext)

    return (
        <div id="card-container">
            <SelectedCircuitCard selectedCircuit={selectedCircuit}/>
            {selectedCircuit.length !== 0 && <CircuitDetails selectedCircuit={selectedCircuit}/>}
        </div>
    )
}
