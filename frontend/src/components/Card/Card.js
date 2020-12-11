import React from 'react';
import ReactDom from 'react-dom';
import './Card.css';
import exit from '../../assets/Body/exit.svg';


const card = (props) =>{
    let cardDesign=
        <div className="card">
            <div className="card-above">
                <img src={props.portada} id="principal" alt="Portada"></img>
                <img src={props.portada} className="little-image" alt="Portada pequeña"></img>
                <img src={props.back} className="little-image" alt="Backside"></img>
            </div>
            <div className="card-text">
                <img src={exit} alt="Exit icon" id="exit-icon" onClick={props.click}></img>
                <p id="titulo">{props.titulo}</p>
                <hr/>
                <p id="autor">Autor: {props.autor}</p>
                <p id="descripcion">{props.descripcion}</p>
                <p id="precio">${props.precio}</p>
                <button id="compra">¡Añadir a tu estanteria!</button>
            </div>
    </div>
    return ReactDom.createPortal(
        <div className="cards">
            {cardDesign}
        </div>,
        document.getElementById('portal')
    );
}


export default card;