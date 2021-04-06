import React from 'react'
import HeaderImage from '../assets/HeaderImage.png'

export default function Header() {
    return (
        <div id="header">
            <img src={HeaderImage} alt="Red F1 car" />
            <h1>F1 Circuit Explorer</h1>
        </div>
    )
}
