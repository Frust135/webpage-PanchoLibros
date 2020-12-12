import React from 'react';
import './Book.css';

const Book = (props) =>{
    return(
        <div >
            <div className="book">
                <div className="book-top">
                    <img id={props.isbn} onClick={props.click} src={props.portada} alt="Libro-portada"></img>
                    <p className="semi-bold">{props.titulo}</p>
                    <p id="autor">{props.autor}</p>
                </div>
                <div className="book-price">
                    <p className="semi-bold">Precio: ${props.precio}</p>
                </div>
            </div>
        </div>
    );
}

export default Book;