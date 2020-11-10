import React from 'react';
import './Navbar.css';
import bookshelf from '../../assets/bookshelf.svg'

const navbar = (props) =>{
    return(
        <div className="navbar">
            <div>
                <nav>
                    <ul className="nav-links">
                        <li>Búsqueda</li>
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