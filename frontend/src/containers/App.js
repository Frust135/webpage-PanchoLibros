import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
// COMPONENTES
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// SCREENS
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BuyScreen from '../screens/BuyScreen/BuyScreen'
import ShowCard from '../actions/showCard';

class App extends Component {
  
  // Estado 
  state = {
    cardPop: false,
    libroPop: 0
  }
  //Click handler de los libros
  clickHandler = (e) =>{
      if (this.state.cardPop){
        this.setState({cardPop: false, libroPop: 0})
      }else{ 
        this.setState({cardPop: true, libroPop: parseInt(e.target.id)})
      }
  }

  render(){
    //Estilo de base de la página home
    let styleDark ={
      transition: "all 0.3s ease 0s"
    }
    //Inicialmente no existe ninguna carta
    let card = null;
    //Se verifica si una tarjeta ha sido clickeada
    if (this.state.cardPop){
      card = (
        <div>
          <ShowCard 
          id = {this.state.libroPop}
          clickHandler={this.clickHandler}
          />
        </div>
      )
      //Y se cambia el estilo con el fin de oscurecer el fondo
      styleDark = {
          filter: "brightness(40%)",
          transition: "all 0.3s ease 0s",
      } 
    }
    return (
      <div className="App" style={styleDark}>
        <div className="Container">
          <div className="App-header"> 
            <Header/>
            <Navbar
              novedades={'#'} 
              autores={'#'}
              categorias={'#'}
              carrito={'/estanteria'}
            />
          </div> 
          <BrowserRouter>

          <Route path="/estanteria/:id" component={BuyScreen}/>
          
          <Route path="/"
             render={(props)=>(
            <HomeScreen {...props} 
            clickHandler={this.clickHandler}
            showCard={this.state.cardPop}
            />
          )}
          exact/>
          </BrowserRouter>
          {card}
          <div className="App-footer">
            <Footer/>
          </div>
          
        </div>
      </div>
      
    );
  }
}
  

export default App;
