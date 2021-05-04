import './App.css';
import { useEffect, createContext } from 'react';
import axios from 'axios';
import Body from './containers/Body';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import setCircuitsAction from './Redux/actions/setCircuitsAction';
import setSelectedCircuitAction from './Redux/actions/setSelectedCircuitAction';

export const CircuitsContext = createContext(null);
export const SelectedCircuitContext = createContext(null);

function App() {
  const circuitsUrl = "https://v1.formula-1.api-sports.io/circuits";

  const dispatch = useDispatch();

  const getCircuits = () => {
    axios(circuitsUrl, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        "x-apisports-key": "feb5832fde82128103f789f9f7745969"
      }
    })
    .then(response => {
      let activeCircuits = response.data.response.filter(circuit => 
        circuit.capacity !== null 
        && circuit.name !== "Istanbul Park"
        && circuit.name !== "Hockenheimring"
        && circuit.name !== "Shanghai International Circuit"
      )
      dispatch(setCircuitsAction(activeCircuits))
      dispatch(setSelectedCircuitAction(activeCircuits[0]))
    })
    .catch(err => console.log(err))
  }

  useEffect(getCircuits, [dispatch])

  const circuits = useSelector(state => state.circuitsReducer)
  const selectedCircuit = useSelector(state => state.selectedCircuitReducer)

  const selectCircuit = (clickedCircuit) => {
    let foundCircuit = circuits.find(circuit => circuit.name === clickedCircuit)
    dispatch(setSelectedCircuitAction(foundCircuit))
  }

  return (
    <div className="App">
      <Header />
      <CircuitsContext.Provider value={circuits}>
      <SelectedCircuitContext.Provider value={selectedCircuit}>
        <Body selectCircuit={selectCircuit} selectedCircuit={selectedCircuit}/>
      </SelectedCircuitContext.Provider>
      </CircuitsContext.Provider>
    </div>
  );
}

export default App;
