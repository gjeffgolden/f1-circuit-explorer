import React from 'react'

export default function SelectedCircuit({ selectedCircuit }) {
    return (
        <div>
            <img src={selectedCircuit.image} alt={`${selectedCircuit.name}`} />
        </div>
    )
}
