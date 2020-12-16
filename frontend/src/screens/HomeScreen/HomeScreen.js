import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HomeScreen.css';
// COMPONENTES

import Sidebar from '../../components/Sidebar/Sidebar';
import Book from '../../components/Book/Book';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
//import PageButton from '../../components/PageButton/PageButton';
// REDUX
import { listLibros } from '../../actions/productActions';

const Homescreen = (props) =>{
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;


    useEffect(() =>{
        dispatch(listLibros());
    }, [dispatch])
    return(
        <div className="App-body">
            <Sidebar
            logo_insta={'https://www.instagram.com/libros_donpancho/?hl=es-la'}
            logo_facebook={''}/>
            <div className="books">
                {loading? <LoadingBox></LoadingBox>
                :
                error?<ErrorBox variant="danger">{error}</ErrorBox> 
                :
                (products.map((libro) =>(
                    <Book 
                    key={libro.ISBN}
                    click={props.clickHandler}
                    show={props.showCard}
                    titulo={libro.titulo}
                    precio={libro.precio}
                    autor={libro.autor}
                    descripcion={libro.descripcion}
                    portada={libro.portada}
                    back={libro.back}
                    isbn={libro.ISBN}
                    />
                    
                )))
                }
            </div>
        </div>
    );
}

export default Homescreen;