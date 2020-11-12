import React from 'react';
import './Book.css'

const book = (props) =>{
    return(
        <div className="book">
            <div className="book-top">
                <img src={props.image} alt="Libro-portada"></img>
                <p className="semi-bold">{props.nombre}</p>
                <p id="autor">Autor: {props.autor}</p>
            </div>
            <div className="book-price">
                <p className="semi-bold">Precio: ${props.precio}</p>
            </div>
        </div>
    );
}

export default book;