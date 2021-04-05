import React from 'react'
import CircuitListItem from '../components/CircuitListItem'

export default function CircutList({ circuits, selectCircuit }) {

    const displayCircuitListItems = () => {
        return circuits.map(circuit => {
            return <CircuitListItem name={circuit.name} selectCircuit={selectCircuit} />
        })
    }

    return (
        <div id="circuit-sidebar">
            {displayCircuitListItems()}
        </div>
    )
}
