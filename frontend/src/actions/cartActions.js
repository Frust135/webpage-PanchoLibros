import { CART_ADD_ITEM } from "../constants/cartConstants";
import Axios from 'axios';


export const addToCart = (productId) => async(dispatch, getState) =>{
    const {data} = await Axios.get(`/api/libros/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            product: data.ISBN,
            titulo: data.titulo,
            autor: data.autor,
            precio: data.precio,
            portada: data.portada
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}