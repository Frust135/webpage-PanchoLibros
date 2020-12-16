import React from 'react';
import './ContainerPrecio.css';
import {Link} from 'react-router-dom';

const ContainerPrecio = (props) =>{
    return(
        <div className="ContainerPrecio">
            <p id="ContainerPrecio-total">TOTAL</p>
            <p id="ContainerPrecio-cantidad">{props.cantidad} Libros</p>
            <p id="ContainerPrecio-precio">${props.preciototal}</p>
            <Link to={props.direccion}><button className="pagar" disabled={props.cantidad===0}> {props.texto} </button></Link>
        </div>
    );

}

export default ContainerPrecio;