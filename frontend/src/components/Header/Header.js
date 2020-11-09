import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import bookshelf from '../../assets/bookshelf.svg'


const header = () =>{
    return(
        <div className="header">
            <div className="up-line">
                <img className="logo left-float clear" src={logo} alt="Logo Pancho Libros"/>
                <img className="bookshelf right-float"  src={bookshelf} alt="bookshelf"/>
            </div>
            <div className="low-line clear"></div>
        </div>
    );
    
}

export default header;