import React from 'react';
import exit from '../../assets/Body/exit.svg';
import './ContainerLibro.css';

const ContainerLibro = (props) =>{
    let buttonStyle = null
    if (props.orden===true){
        buttonStyle ={
            display: 'none'
        };
        
    }
    return(
        <div className="ContainerLibro">
            <div className="ContainerLibro-libro">
            <img style={buttonStyle} src={exit} onClick={props.removeBookHandler} id="ContainerLibro-exit-mobile" alt="exit-button"></img>
                <img src={props.portada} alt="portada" className="ContainerLibro-portada"></img>
                <p id="containerTitulo">{props.titulo}</p>
                <p className="ContainerLibro-texto">Autor: {props.autor}</p>
                <p className="ContainerLibro-texto">Editorial: {props.editorial}</p>
            </div>
            <div className="ContainerLibro-precio">
                <img style={buttonStyle} src={exit} onClick={props.removeBookHandler} id="ContainerLibro-exit-desktop" alt="exit-button"></img>
                <p id="containerPrecio">${props.precio}</p>
            </div>
        </div>
    );
}

export default ContainerLibro;