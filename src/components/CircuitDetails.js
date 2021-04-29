import React from 'react'

export default function CircuitDetails({ selectedCircuit }) {
    return (
        <div id="circuit-details">
            <h3>Details</h3>
            <h5>{selectedCircuit.competition.location.city}, {selectedCircuit.competition.location.country}</h5>
            <h5>{selectedCircuit.competition.name}</h5>
            <h5>Capacity: {selectedCircuit.capacity}</h5>
            <h5>Length: {selectedCircuit.length}</h5>
        </div>
    )
}
