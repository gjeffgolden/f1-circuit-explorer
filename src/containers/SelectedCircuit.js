import React from 'react'

export default function SelectedCircuit({ selectedCircuit }) {
    return (
        <div>
            {selectedCircuit.length === 0 ? "Select a Circuit" : <img src={selectedCircuit.image} alt={`${selectedCircuit.name}`} />}
        </div>
    )
}
