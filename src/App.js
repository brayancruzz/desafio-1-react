import './App.css';
import './Navbar.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings='Hola, que tal?'/>
    </div>
  );
}

export default App;
