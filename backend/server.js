import express from 'express';
import data from './data.js';

const app = express();
app.get('/api/libros/:id', (request, response) =>{
    const libro = data.libros.find(x => x.ISBN == request.params.id);
    if(libro){
        response.send(libro);
    }else{
        response.status(404).send({message: "Libro no encontrado"});
    }
})
app.get('/api/libros', (request, response) =>{
    response.send(data.libros);
});

app.get('/', (request,response) =>{
    response.send('El servidor esta listo')
});

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Servidor en http://localhost:${port}`)
});