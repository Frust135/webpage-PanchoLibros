import React, {useState} from 'react';
import ReactDom from 'react-dom';
import './Card.css';
import exit from '../../assets/Body/exit.svg';
import {Link} from 'react-router-dom';

const Card = (props) =>{
    const [cardImage, setCardImage] = useState(props.portada);
    let cardDesign=
        <div className="card">
            <div className="card-above">
                <img src={exit} alt="Exit icon" id="exit-icon-mobile" onClick={props.click}></img>
                <img src={cardImage} id="principal" alt="Portada"></img>
                <img src={props.portada} onClick={() => setCardImage(props.portada)}  className="little-image" alt="Portada pequeña"></img>
                <img src={props.back} onClick={() => setCardImage(props.back)} className="little-image" alt="Backside"></img>
            </div>
            <div className="card-text">
                <img src={exit} alt="Exit icon" id="exit-icon-desktop" onClick={props.click}></img>
                <p id="titulo">{props.titulo}</p>
                <hr/>
                <p id="autor">Autor: {props.autor}</p>
                <p id="descripcion">{props.descripcion}</p>
                <p id="precio">${props.precio}</p>
                {
                    props.stock > 0 &&(<Link to={"/estanteria/"+props.isbn}><button id="compra" onClick={props.click}>¡Añadir a tu estanteria!</button></Link>)
                }
                {
                    props.stock === 0 &&(<p>No hay stock disponible.</p>)
                }
                
            </div>
    </div>
    return ReactDom.createPortal(
        <div className="cards">
            {cardDesign}
        </div>,
        document.getElementById('portal')
    );
}


export default Card;