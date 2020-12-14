import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveInformation } from '../../actions/cartActions';
import './InformationScreen.css';

const InformationScreen = () =>{
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [rut, setRut] = useState('');
    const [telefono, setTelefono] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveInformation({nombre, apellidos, rut, telefono}))
    }
    return(
    <div className="InformationScreen">
        <form className="informacion-form" onSubmit={submitHandler}>
            <div className="InformationScreen-info">
                <h1>Ingrese sus datos para el retiro.</h1>
                <h2>Una vez ingresado sus datos, y realizada la compra debe dirigirse al local con su carnet de identidad para realizar el retiro de los productos.</h2>

            </div>
            <div className="label-holder">
            <div>
                <label htmlFor="nombre">NOMBRE</label>
                <input type="text" id="nombre" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required></input>
            </div>
            <div>
                <label htmlFor="apellidos">APELLIDOS</label>
                <input type="text" id="apellidos" placeholder="Ingrese sus apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required></input>
            </div>
            <div>
                <label htmlFor="rut">RUT</label>
                <input type="text" id="rut" placeholder="Ingrese su rut (xx.xxx.xxx-x)" value={rut} onChange={(e) => setRut(e.target.value)} required></input>
            </div>
            <div>
                <label htmlFor="telefono">TÉLEFONO</label>
                <input type="text" id="telefono" placeholder="Ingrese su número telefónico" value={telefono} onChange={(e) => setTelefono(e.target.value)} required></input>
            </div>
            <div>
                <label/>
                <button className="pagar"> Continuar </button>
            </div>
            </div>
        </form>
    </div>
    );
};

export default InformationScreen;