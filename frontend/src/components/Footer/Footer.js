import React from 'react';
import './Footer.css';
import icono_horario from '../../assets/Footer/icon-horario.svg';
import icono_telefono from '../../assets/Footer/icon-telefono.svg';
import icono_ubicacion from '../../assets/Footer/icon-ubicacion.svg';

const footer = (props) =>{
    return(    
        <div className="informacion_contacto float-clear">
            <div className="box float-clear">
                <p> <img src={icono_ubicacion} alt="icono horario"></img>Providencia, 1114 galeria veneto, local 41</p>
            </div>
            <div className="box float-clear">
                <p> <img src={icono_telefono} alt="icono telefono"></img> +569 9216 1225</p>
            </div>
            <div className="box float-clear">
                <p> <img src={icono_horario} alt="icono ubicacion"></img>Lunes a viernes 10:00 a 18:00 hrs, sabado 10:00 a 14:00 hrs</p>
            </div>            
        </div>
    );

}
export default footer;  