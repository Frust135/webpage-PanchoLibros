import React, { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENTES

import Sidebar from '../../components/Sidebar/Sidebar';
import Book from '../../components/Book/Book';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import ErrorBox from '../../components/ErrorBox/ErrorBox';

const Homescreen = (props) =>{
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() =>{
        const getData = async () =>{
            try{
                setLoading(true);
                const { data } = await axios.get('/api/libros');
                setLoading(false);
                setLibros(data);
            }catch(err){
                setError(err.message);
                setLoading(false);
            }
            
        };
        getData();
    }, [])
    return(
        <div className="App-body">
            <Sidebar/>
            <div className="books">
                {loading? <LoadingBox></LoadingBox>
                :
                error?<ErrorBox variant="danger">{error}</ErrorBox> 
                :
                (libros.map((libro) =>(
                    <Book 
                    click={props.clickHandler}
                    show={props.showCard}
                    titulo={libro.titulo}
                    precio={libro.precio}
                    autor={libro.autor}
                    descripcion={libro.descripcion}
                    />
                )))
                }
            </div>
        </div>
    );
}

export default Homescreen;