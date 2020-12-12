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
        // <div className="Container-carrito-body">
        //     <div className="Container-carrito">
        //         <div className="Container-libro"></div>
        //         <div className="Container-precio-libro"></div>
        //     </div>
        // </div>

    );
}

export default ContainerLibro;