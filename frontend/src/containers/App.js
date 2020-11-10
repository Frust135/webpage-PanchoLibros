import './App.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

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
        <h1>Pancho Libros</h1>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
