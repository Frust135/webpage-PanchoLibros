import React from 'react';
import './Card.css';

const card = (props) =>{
    return(
        <div className="card">
            <div className="card-above">
                <img src={props.portada} id="principal" alt="Portada"></img>
                <img src={props.portada} className="little-image" alt="Portada pequeña"></img>
                <img src={props.back} className="little-image" alt="Backside"></img>
            </div>
            <div className="card-text">
                <p id="titulo">{props.nombre}</p>
                <hr/>
                <p id="autor">Autor: {props.autor}</p>
                <p id="descripcion">{props.descripcion}</p>
                <p id="precio">${props.precio}</p>
                <button id="compra">¡Añadir a tu estanteria!</button>
            </div>
        </div>
    );
}

export default card;