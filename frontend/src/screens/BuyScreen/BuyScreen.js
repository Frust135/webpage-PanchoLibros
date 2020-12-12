import React from 'react';
import './BuyScreen.css';

// COMPONENTES
import ContainerLibro from '../../components/ContainerCarrito/ContainerLibro';
import ContainerPrecio from '../../components/ContainerCarrito/ContainerPrecio';
 
const buyscreen = (props) =>{
    const productId = props.id;
    return(
        <div>
            <ContainerLibro
            titulo={props.titulo}
            isbn={productId}/>
            <ContainerPrecio/>
        </div>
    );
}

export default buyscreen;
