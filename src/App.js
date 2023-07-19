
import './App.css';
import Slider from './Components/Slider';
import Array from './Components/Array.json'

function App() {
  return (
    <div className="App">
      <Slider data={Array}/>
    </div>
  );
}

export default App;
