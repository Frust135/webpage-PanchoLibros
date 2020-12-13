import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './BuyScreen.css';

// COMPONENTES
import ContainerLibro from '../../components/ContainerCarrito/ContainerLibro';
import ContainerPrecio from '../../components/ContainerCarrito/ContainerPrecio';
import { addToCart, removeFromCart } from '../../actions/cartActions';
 

const Buyscreen = (props) =>{
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const productId = props.match.params.id;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId));
        }
    }, [dispatch, productId]);
    const removeBookHandler = (id) =>{
        dispatch(removeFromCart(id));
        console.log(id);
    }
    return(
        <div className="App-buyscreen">
            {cartItems.length === 0 ?
                (<div className="estanteria-vacia"><p>Tu estantería se encuentra vacía.</p></div>)
                :
                cartItems.map((libros) =>(
                    <ContainerLibro
                    key={libros.ISBN}
                    titulo={libros.titulo}
                    autor={libros.autor}
                    editorial={libros.editorial}
                    portada={libros.portada}
                    precio={libros.precio}
                    removeBookHandler={() => removeBookHandler(libros.ISBN)}
                    />
                    
                ))
                
                }
            <ContainerPrecio
            cantidad={cartItems.reduce((acumulador) => acumulador + 1 , 0)}
            preciototal={cartItems.reduce((acumulador, libro) => acumulador + libro.precio, 0)}
            />
        </div>
    );
}

export default Buyscreen;
