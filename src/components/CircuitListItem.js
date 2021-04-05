import React from 'react'

export default function CircuitListItem({ name, selectCircuit }) {

    const handleClick = (event) => {
        selectCircuit(event.target.textContent)
    }

    return (
        <div className="circuit-list-item" onClick={handleClick}>
            <h5>{name}</h5>
        </div>
    )
}
