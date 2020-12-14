import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_INFORMATION, CART_SAVE_PAGO } from "../constants/cartConstants";
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
            portada: data.portada,
            ISBN: data.ISBN,
            editorial: data.editorial
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveInformation = (data) => (dispatch) =>{
    dispatch({type: CART_SAVE_INFORMATION, payload: data});
    localStorage.setItem('InformacionUsuario', JSON.stringify(data));
};

export const saveInformationPago = (data) => (dispatch) =>{
    dispatch({type: CART_SAVE_PAGO, payload: data});
}