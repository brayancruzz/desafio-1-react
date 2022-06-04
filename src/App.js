import './styles/App.css'
import './styles/Navbar.css'
import './styles/itemList.css'
import './styles/item.css'
import './styles/mainContainer.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings='El E-Commerce esta en contrucción 😎'/>
    </div>
  );
}

export default App;
