import "./App.css";
import NavBarApp from "./components/nav/Nav.jsx";
import NavBarApp2 from "./components/nav/Nav2";
import Prueba from "./components/prueba/Prueba";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBarApp2></NavBarApp2>
        <Prueba></Prueba>
      </header>
    </div>
  );
}

export default App;
