import React from 'react';
import './Sidebar.css';
import logo_insta from '../../assets/Sidebar/icon-insta.png';
import logo_facebook from '../../assets/Sidebar/icon-facebook.png';
import imagen_personalizada from '../../assets/Sidebar/imagen_de_ejemplo.jpg';

const sidebar = (props) =>{
    return(    
        <div className="sidebar"> 
        <h3 className="editorial">
            Editoriales
        </h3>
        <ul className="edi">
            <li className="editorial_movil"><a href={props.alfaguara}>Alfaguara</a></li>
            <li className="editorial_movil"><a href={props.acantilado}>Acantilado</a></li>
            <li className="editorial_movil"><a href={props.anagrama}>Anagrama</a></li>
            <li className="editorial_movil"><a href={props.atalanta}>Atalanta</a></li>
            <li className="editorial_movil"><a href={props.cabaret}>Cabaret Voltaire</a></li>
            <li className="editorial_movil"><a href={props.errata}>Errata Naturae</a></li>
            <li className="editorial_movil"><a href={props.funa}>Funambulista</a></li>
            <li className="editorial_movil"><a href={props.marea}>Marea</a></li>
            <li className="editorial_movil"><a href={props.rhm}>RHM</a></li>
        </ul>
        <a href={props.logo_insta} target="blank">
            <img className="logo_redes" src={logo_insta} alt="Logo instagram">
            </img>
        </a>
        <a href={props.logo_facebook}>
            <img className="logo_redes" src={logo_facebook} alt="Logo facebook">
            </img>
        </a>
        <div className="borde_izquierdo">
            <img className="imagen_personalizada" src={imagen_personalizada} alt="Imagen de la libreria"></img>
            <p className="clear" 
            >
                "35 años en este oficio tan maravilloso, una aventura, un sueño que es un libro."
            </p>
        </div>
        </div>
    );

}
export default sidebar;