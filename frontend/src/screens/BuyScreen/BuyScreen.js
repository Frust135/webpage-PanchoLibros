import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './BuyScreen.css';

// COMPONENTES
import ContainerLibro from '../../components/ContainerCarrito/ContainerLibro';
import ContainerPrecio from '../../components/ContainerCarrito/ContainerPrecio';
import { addToCart } from '../../actions/cartActions';
 
const Buyscreen = (props) =>{
    const productId = props.match.params.id;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId));
        }
    }, [dispatch, productId]);
    return(
        <div className="App-buyscreen">
            <ContainerLibro
            titulo={props.titulo}
            isbn={productId}/>
            <ContainerPrecio/>
        </div>
    );
}

export default Buyscreen;
