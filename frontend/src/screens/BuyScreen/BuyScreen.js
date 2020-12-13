import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './BuyScreen.css';

// COMPONENTES
import ContainerLibro from '../../components/ContainerCarrito/ContainerLibro';
import ContainerPrecio from '../../components/ContainerCarrito/ContainerPrecio';
import { addToCart } from '../../actions/cartActions';
 
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

    }
    const pagarHandler = () =>{

    }
    return(
        <div className="App-buyscreen">
            {cartItems.length === 0 ?
                <ContainerLibro
                titulo={"Tu estantería se encuentra vacía"}/>
                :
                cartItems.map((libros) =>(
                    <ContainerLibro
                    key={productId}
                    titulo={libros.titulo}
                    autor={libros.autor}
                    editorial={libros.editorial}
                    portada={libros.portada}
                    isbn={libros.isbn}
                    precio={libros.precio}
                    removeBookHandler={removeBookHandler(productId)}/>
                    
                ))
                
                }
            <ContainerPrecio
            cantidad={cartItems.reduce((acumulador) => acumulador + 1 , 0)}
            preciototal={cartItems.reduce((acumulador, libro) => acumulador + libro.precio, 0)}
            pagarHandler={pagarHandler}/>
        </div>
    );
}

export default Buyscreen;
