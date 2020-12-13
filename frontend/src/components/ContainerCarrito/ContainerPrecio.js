import React from 'react';
import './ContainerPrecio.css';

const ContainerPrecio = (props) =>{
    return(
        <div className="ContainerPrecio">
            <p id="ContainerPrecio-total">TOTAL</p>
            <p id="ContainerPrecio-cantidad">{props.cantidad} Libros</p>
            <p id="ContainerPrecio-precio">${props.preciototal}</p>
            <button className="pagar" onClick={props.pagarHandler} disabled={props.cantidad===0}> Pagar </button>
        </div>
    );

}

export default ContainerPrecio;