import React from 'react';
import './Footer.css';
import icono_horario from '../../assets/Footer/icon-horario.png';
import icono_telefono from '../../assets/Footer/icon-telefono.png';
import icono_ubicacion from '../../assets/Footer/icon-ubicacion.png';

const footer = (props) =>{
    return(    
        <div className="informacion_contacto">
            <img className="imagenes_contacto" src={icono_horario} alt="icono horario"></img>
            <p>Providencia, 1114 galeria veneto, local 41</p>
            <img className="imagenes_contacto" src={icono_telefono} alt="icono telefono"></img>
            <p>+569 9216 1225</p>
            <img className="imagenes_contacto" src={icono_ubicacion} alt="icono ubicacion"></img>
            <p>Lunes a viernes 10:00 a 18:00 hrs, sabado 10:00 a 14:00 hrs</p>
           
        </div>
    );

}
export default footer;