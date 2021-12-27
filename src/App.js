import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {

  return (
    <div className="App">
      <ClickCounter name="Chai"/>
      <HoverCounter name="Chai"/>
    </div>
  );
}

export default App;
