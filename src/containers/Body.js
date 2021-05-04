import React from 'react'
import CircuitList from './CircuitList'
import SelectedCircuit from './SelectedCircuit'

export default function Body({ selectCircuit }) {
    return (
        <div id="body">
            <CircuitList selectCircuit={selectCircuit} />
            <SelectedCircuit />
        </div>
    )
}
