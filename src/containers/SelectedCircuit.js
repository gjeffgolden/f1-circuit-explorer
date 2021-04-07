import React from 'react'
import SelectedCircuitCard from '../components/SelectedCircuitCard'
import CircuitDetails from '../components/CircuitDetails'

export default function SelectedCircuit({ selectedCircuit }) {
    return (
        <div id="card-container">
            <SelectedCircuitCard selectedCircuit={selectedCircuit}/>
            {selectedCircuit.length !== 0 && <CircuitDetails selectedCircuit={selectedCircuit}/>}
        </div>
    )
}
