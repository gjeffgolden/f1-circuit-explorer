import './App.css';
import { useEffect } from 'react';
import Body from './containers/Body';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import setCircuitsAction from './Redux/actions/setCircuitsAction';
import setSelectedCircuitAction from './Redux/actions/setSelectedCircuitAction';

function App() {
  const circuitsUrl = "https://v1.formula-1.api-sports.io/circuits";

  const dispatch = useDispatch();

  const getCircuits = () => {
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
      dispatch(setCircuitsAction(activeCircuits))
      dispatch(setSelectedCircuitAction(activeCircuits[0]))
    })
  }

  useEffect(getCircuits, [])

  const circuits = useSelector(state => state.circuitsReducer)
  const selectedCircuit = useSelector(state => state.selectedCircuitReducer)

  const selectCircuit = (clickedCircuit) => {
    let foundCircuit = circuits.find(circuit => circuit.name === clickedCircuit)
    dispatch(setSelectedCircuitAction(foundCircuit))
  }

  return (
    <div className="App">
      <Header />
      <Body circuits={circuits} selectCircuit={selectCircuit} selectedCircuit={selectedCircuit}/>
    </div>
  );
}

export default App;
