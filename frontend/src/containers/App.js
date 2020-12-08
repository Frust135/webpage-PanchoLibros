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
    let styleDark ={
      transition: "all 0.3s ease 0s"
    }
    if (this.state.cardPop){
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
          <Route path="/estanteria" 
          component={BuyScreen}/>
          <Route path="/" 
          render={(props)=>(
            <HomeScreen {...props} 
            clickHandler={this.clickHandler}
            showCard={this.state.cardPop}
            titulo={'test'}/>
          )}
          exact/>
          </BrowserRouter>
          <div className="App-footer">
            <Footer/>
          </div>
          
        </div>
      </div>
      
    );
  }
}
  

export default App;
