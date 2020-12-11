import React from 'react';
import './content-container-wrap.css';

const Wrap = (props) =>{
    return(
        <div className="Container-carrito-body">
            <div className="Container-carrito">
                <div className="Container-libro"></div>
                <div className="Container-precio-libro"></div>
            </div>
            <div className="Clase-total">
                <p id="sdf">TOTAL</p>
            </div>
        </div>

    );
}

export default Wrap;