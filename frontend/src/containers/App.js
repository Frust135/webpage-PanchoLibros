import './App.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Book from '../components/Book/Book';
import imageExample from '../assets/Body/book-example.jpg'; //BORRAR CUANDO SE IMPLEMENTE LA DB

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
        <Sidebar id="sidebar"/>
        <div className="body"> 
          <Book //Se han agregado 3 libros a modo de ejemplo
          image={imageExample} 
          nombre={'Los pies del silencio'}
          autor={'María José Terré'}
          precio={'13.000'}
          />
          <Book 
          image={imageExample}
          nombre={'Los pies del silencio'}
          autor={'María José Terré'}
          precio={'13.000'}
          />
          <Book 
          image={imageExample}
          nombre={'Los pies del silencio'}
          autor={'María José Terré'}
          precio={'13.000'}
          />
        </div> 
      </div>
      <br/>
    </div>
  );
}

export default App;
