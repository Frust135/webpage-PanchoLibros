import React from 'react';
import './Navbar.css';
import bookshelf from '../../assets/Header/bookshelf.svg';
import burger from '../../assets/Header/burger.svg'

const navbar = (props) =>{
    return(
        <div className="navbar">
            <div className="navbar-leftside">
                <nav>
                    <ul className="nav-links">
                        <img className="burger-menu" src={burger} alt="Burger menú"/>
                        <li id="busqueda">Búsqueda</li>
                        <li><input className="input-navbar" type="text" placeholder="Búsqueda..."/></li>
                        <li><a href={props.novedades}>Novedades</a></li>
                        <li><a href={props.autores}>Autores</a></li>
                        <li><a href={props.categorias}>Categorias</a></li>
                    </ul>
                </nav>
            </div>
            <div className="compra">
                <a href={props.carrito}><img src={bookshelf} id="logo" alt="Bookshelf"/></a>
                <p>¡Añade un libro a tu <br/> estantería!</p> 
            </div>        
        </div>
    );
};

export default navbar;