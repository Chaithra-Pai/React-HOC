import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

function App() {

  return (
    <div className="App">
      <ClickCounter name="Chai"/>
      <HoverCounter name="Chai"/>

      {/* <UserProvider value="Chaithra">
        <ComponentC />
      </UserProvider> */}
      
    </div>
  );
}

export default App;
