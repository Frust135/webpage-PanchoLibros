import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import Card from '../components/Card/Card';
import EmptyCard from '../components/Card/EmptyCard';

const ShowCard = (props) =>{
    const dispatch = useDispatch();
    const productId = props.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    useEffect(() => {
      dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    return (
        <div className="card">
            {loading? <EmptyCard/>
            :
            error? <EmptyCard/>
            :(
          <Card 
          click={props.clickHandler}
          portada={product.portada}
          back={product.back}
          titulo={product.titulo}
          autor={product.autor}
          precio={product.precio}
          descripcion={product.descripcion}
          isbn={product.ISBN}
          stock={product.stock}/>)
          }
        </div> 
    );
};

export default ShowCard;