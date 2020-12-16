import React from 'react';
import ReactDom from 'react-dom';
import './Card.css';
import exit from '../../assets/Body/exit.svg';

const EmptyCard = (props) =>{
    let cardDesign=
        <div className="card">
            <div className="card-above">
                <img alt="Exit icon" id="exit-icon-mobile" onClick={props.click}></img>
            </div>
            <div className="card-text">
                <img src={exit} alt="Exit icon" id="exit-icon-desktop" onClick={props.click}></img>
                <p id="titulo">CARGANDO</p>
                <hr/>
                <p id="autor">CARGANDO</p>
                <p id="descripcion">CARGANDO</p>
                <p id="precio">CARGANDO</p>
                <button id="compra" onClick={props.click}>¡Añadir a tu estanteria!</button>
            </div>
    </div>
    return ReactDom.createPortal(
        <div className="cards">
            {cardDesign}
        </div>,
        document.getElementById('portal')
    );
}


export default EmptyCard;