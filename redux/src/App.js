import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BUY_SOAP, SELL_SOAP } from './store/shopActions';

function App() {
  const soap = useSelector(state => state.soap)
  const dispatch = useDispatch()
  const handleSell =()=>{
    dispatch({type: SELL_SOAP})
  }
  const handleBuy =()=>{
    dispatch({type: BUY_SOAP, payload: 10})
  }
  return (
    <div className="App">
<>
<button onClick={handleSell}>Sell</button>
<h1>{soap}</h1>
<button onClick={handleBuy}>Buy</button>
  </>
    </div>
  );
}

export default App;
