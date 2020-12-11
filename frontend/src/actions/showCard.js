import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import Card from '../components/Card/Card';

const ShowCard = (props) =>{
    const dispatch = useDispatch();
    const productId = props.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    console.log(productId);
    useEffect(() => {
      dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    console.log(product);
    return (
        <div className="card">
            {loading? <Card/>
            :
            error? <Card/>
            :(
          <Card 
          click={props.clickHandler}
          portada={product.portada}
          back={product.back}
          titulo={product.titulo}
          autor={product.titulo}
          precio={product.precio}
          descripcion={product.descripcion}
          isbn={product.isbn}/>)
            }
        </div> 
    );
};

export default ShowCard;