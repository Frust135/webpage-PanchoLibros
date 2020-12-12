import React from 'react';
import './PageButton.css';

const PageButton = (props) =>{
    return(
        <div className="pageButton">
            <a href={props.back} className="pageButton-back">Atras</a>
            <p>{props.page}</p>
            <a href={props.forward} className="pageButton-forward">Siguiente</a>
        </div>
    );
};

export default PageButton;