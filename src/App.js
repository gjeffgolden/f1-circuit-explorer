import './App.css';
import { useEffect, useState } from 'react'
import Body from './containers/Body'
import Header from './components/Header'

function App() {

  const [circuits, setCircuits] = useState([])
  const [selectedCircuit, setSelectedCircuit] = useState([])

  const circuitsUrl = "https://v1.formula-1.api-sports.io/circuits"

  useEffect(() => {
    fetch(circuitsUrl, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        "x-apisports-key": "feb5832fde82128103f789f9f7745969"
      }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
    .then(data => {
      let activeCircuits = data.response.filter(circuit => 
        circuit.capacity !== null 
        && circuit.name !== "Istanbul Park"
        && circuit.name !== "Hockenheimring"
        && circuit.name !== "Shanghai International Circuit"
      )
      setCircuits(activeCircuits)
      setSelectedCircuit(activeCircuits[0])
    })
  }, [])

  const selectCircuit = (clickedCircuit) => {
    let foundCircuit = circuits.find(circuit => circuit.name === clickedCircuit)
    setSelectedCircuit(foundCircuit)
  }

  return (
    <div className="App">
      <Header />
      <Body circuits={circuits} selectCircuit={selectCircuit} selectedCircuit={selectedCircuit}/>
    </div>
  );
}

export default App;
