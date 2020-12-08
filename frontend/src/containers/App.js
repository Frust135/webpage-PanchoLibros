import React, {Component} from 'react';
import './App.css';
// COMPONENTES
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Book from '../components/Book/Book';
import Footer from '../components/Footer/Footer';
// OTROS 
import imageExample from '../assets/Body/book-example.jpg'; //BORRAR CUANDO SE IMPLEMENTE LA DB

class App extends Component {
  state = {
    cardPop: false
  }
  clickHandler = () =>{
    if (this.state.cardPop){
      this.setState({cardPop: false})
    }else{ 
      this.setState({cardPop: true})
    }
  }
  

  render(){
    let books = null
    const createBook = (titulo, autor, portada, precio, back, descripcion) =>{
      books = <Book
      click={this.clickHandler}
      show={this.state.cardPop}
      portada={portada} 
      titulo={titulo}
      autor={autor}
      precio={precio}
      descripcion={descripcion}
      back={back}
      />
      ;
    }

    let styleDark ={
      transition: "all 0.3s ease 0s"
    }


    if (this.state.cardPop){
      styleDark = {
        filter: "brightness(40%)",
        transition: "all 0.3s ease 0s",
      } 
    }


    createBook('Los pies del silencio', 
    'María José Terré', 
    imageExample,
    '13.000',
    imageExample,
    'lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
    );

    return (
      <div className="App" >
        <div className="Container" style={styleDark}>
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
          <Sidebar/>
          <div className="books">
            {books}
          </div>
          </div>
          
          <div className="App-footer">
            <Footer/>
          </div>
          
        </div>
      </div>
    );
  }
}
  

export default App;
