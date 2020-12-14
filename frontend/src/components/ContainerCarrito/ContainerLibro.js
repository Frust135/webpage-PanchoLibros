import React from 'react';
import exit from '../../assets/Body/exit.svg';
import './ContainerLibro.css';

const ContainerLibro = (props) =>{
    
    return(
        <div className="ContainerLibro">
            <div className="ContainerLibro-libro">
                <img src={props.portada} alt="portada" className="ContainerLibro-portada"></img>
                <p id="containerTitulo">{props.titulo}</p>
                <p className="ContainerLibro-texto">Autor: {props.autor}</p>
                <p className="ContainerLibro-texto">Editorial: {props.editorial}</p>
            </div>
            <div className="ContainerLibro-precio">
                <img src={exit} onClick={props.removeBookHandler} id="ContainerLibro-exit" alt="exit-button"></img>
                <p id="containerPrecio">${props.precio}</p>
            </div>
        </div>
    );
}

export default ContainerLibro;