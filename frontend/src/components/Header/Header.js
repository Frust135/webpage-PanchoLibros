import React from 'react';
import './Header.css';
import logo from '../../assets/Header/logo.png';
import bookshelf from '../../assets/Header/estanteria-dibujo.png'


const header = () =>{
    return(
        <div className="header">
            <div className="up-line">
                <a href='/'><img className="logo left-float clear" src={logo} alt="Logo Pancho Libros"/></a>
                <img className="bookshelf right-float"  src={bookshelf} alt="Estanteria"/>
            </div>
            <div className="low-line clear"></div>
        </div>
    );
    
}

export default header;