import './App.css';
import { useEffect, useState } from 'react'
import CircuitList from './containers/CircuitList'
import SelectedCircuit from './containers/SelectedCircuit'

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
      let activeCircuits = data.response.filter(circuit => circuit.capacity !== null)
      setCircuits(activeCircuits)
    })
  }, [])

  const selectCircuit = (clickedCircuit) => {
    let foundCircuit = circuits.find(circuit => circuit.name === clickedCircuit)
    setSelectedCircuit(foundCircuit)
  }

  return (
    <div className="App">
      <CircuitList circuits={circuits} selectCircuit={selectCircuit} />
      <SelectedCircuit selectedCircuit={selectedCircuit} />
    </div>
  );
}

export default App;
