import React, { useContext } from 'react'
import CircuitListItem from '../components/CircuitListItem'
import { CircuitsContext } from '../App';

export default function CircutList({ selectCircuit }) {

    const circuits = useContext(CircuitsContext)

    const displayCircuitListItems = () => {
        return circuits.map((circuit, i) => {
            return <CircuitListItem key={'circuit_' + i} name={circuit.name} selectCircuit={selectCircuit} />
        })
    }

    return (
        <div id="circuit-sidebar">
            {displayCircuitListItems()}
        </div>
    )
}
