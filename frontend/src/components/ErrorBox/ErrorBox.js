import React from 'react';

const errorbox = (props) =>{
    return(
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    );
}

export default errorbox;