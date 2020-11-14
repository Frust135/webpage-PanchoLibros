import React from 'react';
import Card from '../Card/Card';
import './Book.css';

const Book = (props) =>{
    return(
        <div>
        <div className="book">
            <div className="book-top">
                <img onClick={props.click} src={props.portada} alt="Libro-portada"></img>
                <p className="semi-bold">{props.titulo}</p>
                <p id="autor">Autor: {props.autor}</p>
            </div>
            <div className="book-price">
                <p className="semi-bold">Precio: ${props.precio}</p>
            </div>
        </div>
        <div className="card">
            <Card open={props.show}
            click={props.click}
            portada={props.portada}
            back={props.back}
            titulo={props.titulo}
            autor={props.autor}
            precio={props.precio}
            descripcion={props.descripcion}
            />
        </div>
        </div>
    );
}

export default Book;