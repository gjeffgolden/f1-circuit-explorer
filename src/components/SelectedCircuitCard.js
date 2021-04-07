import React from 'react'

export default function SelectedCircuitCard({ selectedCircuit }) {
    return (
        <div id="card">
            <h2>{selectedCircuit.name}</h2>
            {selectedCircuit.length !== 0 && <img src={selectedCircuit.image} alt={`${selectedCircuit.name}`}/>}
        </div>
    )
}
