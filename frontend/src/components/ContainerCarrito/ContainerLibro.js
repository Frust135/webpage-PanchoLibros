import React from 'react';
import './ContainerLibro.css';

const ContainerLibro = (props) =>{
    return(
        <div className="ContainerLibro">
            <div className="ContainerLibro-libro">
                {props.titulo}
                {props.isbn}
            </div>
            <div className="ContainerLibro-precio">
                {props.precio}
            </div>
        </div>
    );
}

export default ContainerLibro;