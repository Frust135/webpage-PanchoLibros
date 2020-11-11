import './App.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Navbar
          novedades={'#'} 
          autores={'#'}
          categorias={'#'}
          carrito={'#'}
        />
        
      </header>
      <body>
        <Sidebar>

        </Sidebar>
      </body>
    </div>
  );
}

export default App;
