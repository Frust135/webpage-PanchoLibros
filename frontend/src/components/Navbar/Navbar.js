import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import bookshelf from '../../assets/Header/bookshelf.svg';
import burger from '../../assets/Header/burger.svg'

const Navbar = (props) =>{
    const [open, setOpen] = useState(false);

    return(
        <div>
        <div className="navbar"> 
            <div className="navbar-leftside">
                <nav>
                    <ul className="nav-links">
                        <img onClick={() => setOpen(!open)} 
                        className="burger-menu" src={burger} alt="Burger menú"/>
                        <li id="busqueda">Búsqueda</li>
                        <li><input className="input-navbar" type="text" placeholder="Búsqueda..."/></li>
                        <li><a href={props.novedades}>Novedades</a></li>
                        <li><a href={props.autores}>Autores</a></li>
                        <li><a href={props.categorias}>Categorias</a></li>
                    </ul>
                </nav>
            </div>

            <div className="compra">
                <Link to={props.carrito}><img src={bookshelf} id="logo" alt="Bookshelf"/></Link>
                <p>¡Añade un libro a tu <br/> estantería!</p> 
            </div>  

        </div>

        <div className="navbar-mobile">
            <ul className="nav-links-mobile" 
            style={{transform: open ? "translateX(0px)" : "translateX(-1000px)"}}>
                <hr/>
                <li><a href={props.novedades}>Novedades</a></li>
                <hr/>
                <li><a href={props.autores}>Autores</a></li>
                <hr/>
                <li><a href={props.categorias}>Categorias</a></li>
                <hr/>
            </ul>
        </div>

        </div>
    );
};

export default Navbar;