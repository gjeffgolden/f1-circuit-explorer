import React from 'react'
import CircuitList from './CircuitList'
import SelectedCircuit from './SelectedCircuit'

export default function Body({ circuits, selectCircuit, selectedCircuit }) {
    return (
        <div id="body">
            <CircuitList circuits={circuits} selectCircuit={selectCircuit} />
            <SelectedCircuit selectedCircuit={selectedCircuit} />
        </div>
    )
}
