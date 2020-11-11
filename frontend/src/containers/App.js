import './App.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
        <Navbar
          novedades={'#'} 
          autores={'#'}
          categorias={'#'}
          carrito={'#'}
        />
        
      </div>
      <div className="App-body">
        <Sidebar>

        </Sidebar>
        <br/>
      </div>
    </div>
  );
}

export default App;
