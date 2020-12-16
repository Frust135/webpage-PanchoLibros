import React from 'react';
import './OrdenScreen.css';
import {useSelector} from 'react-redux';
import ContainerLibro from '../../components/ContainerCarrito/ContainerLibro';
import ContainerPrecio from '../../components/ContainerCarrito/ContainerPrecio';

const PagoScreen = (props) =>{
    const cart = useSelector(state => state.cart);
    if (!cart.cartItems){
        props.history.push('/estanteria');
    }
    return(
        <div className="PagoScreen">
            <h1>Tus libros a llevar</h1>
            <div className="PagoScreen-productos">
                {cart.cartItems.map((libros) =>(
                    <ContainerLibro
                    key={libros.ISBN}
                    titulo={libros.titulo}
                    autor={libros.autor}
                    editorial={libros.editorial}
                    portada={libros.portada}
                    precio={libros.precio}
                    orden={true}
                    />                   
                    ))
                    }
            </div>
            <br/>
            <h1>Datos de la persona a retirar</h1>
            <div className="PagoScreen-informacion">
                    <p><strong>Nombre: </strong>{cart.InformacionUsuario.nombre} </p>
                    <hr/>
                    <p><strong>Apellidos:</strong> {cart.InformacionUsuario.apellidos} </p>
                    <hr/>
                    <p><strong>RUT: </strong>{cart.InformacionUsuario.rut} </p>
                    <hr/>
                    <p><strong>Télefono: </strong>{cart.InformacionUsuario.telefono} </p>
                    <hr/>
                    <p><strong>Método de Pago: </strong>{cart.metodoPago} </p>
            </div>
            <br/>
            <h1>Confirmar Pago</h1>
            <div>
            <ContainerPrecio
            cantidad={cart.cartItems.reduce((acumulador) => acumulador + 1 , 0)}
            preciototal={cart.cartItems.reduce((acumulador, libro) => acumulador + libro.precio, 0)}
            texto={"Pagar"}
            direccion={"#"}/>
            </div>
        </div>
    );
}

export default PagoScreen;