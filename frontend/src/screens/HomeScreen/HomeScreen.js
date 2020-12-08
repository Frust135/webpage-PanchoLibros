import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Book from '../../components/Book/Book'

const homescreen = (props) =>{
    return(
        <div className="App-body">
            <Sidebar/>
            <div className="books">
                <Book
                click={props.clickHandler}
                show={props.showCard}
                titulo={props.titulo}
            />
            </div>
        </div>
    );
}

export default homescreen;