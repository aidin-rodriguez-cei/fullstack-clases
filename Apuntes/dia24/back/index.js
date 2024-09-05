// Version de CommonJS
// const express = require('express');
// const cors = require('cors');

// Version ES Modules
import express from 'express';
import cors from 'cors';

// importar mis posts y comentarios de prueba
import {publicaciones, comments} from './data/mockData.js';

import { getLastId } from './utils/utils.js'; 

// importar variables de configuracións
import {PORT, URL} from './config/config.js'

const app = express();

// CORS Nos permite acceder a los recursos de este servidor, desde otro servidor. 
app.use(cors());

// Procesa el JSON bodypara leerlo con req.body()
app.use(express.json())

// const lastCommentId = getLastId(comments);
// console.log("Last comment id: ", lastCommentId);
// const lastPostId = getLastId(publicaciones);
// console.log("Last post id: ", lastPostId)

// --------------------------
//           Rutas
// --------------------------

// GET /
app.get("/", (req, res)=>{
    res.setHeader("Content-Type", "text/html");

    const landingHTML=
    `<h1>Bienvenidos a nuestra REST-API</h1>
    Mi backend es: <strong>${URL}:${PORT}/publicaciones
    
    <ul>
    <li> GET <a target="_blank" href="${URL}:${PORT}" </li>
    <li> Get </li>
    </ul>
    
    `;

    res.send(landingHTML)
});

// GET /publicaciones
app.get("/publicaciones", (req, res) => {
  
    res.json(publicaciones);
})

// POST /publicaciones
app.post("/publicaciones",  (req, res) => {

    // respuesta de ejemplo
    // const newPosts={
    //     id: 101,
    //     userId: 1,
    //     title: "Mi nuevo Post",
    //     body: "Soy un nuevo Posts"
    // }


    const lastId = getLastId(publicaciones);

        const newPosts={
        id: lastId +1,
        userId: 1,
        title: req.body.title,
        body: req.body.content
    }

    publicaciones.push(newPosts);

    res.json(newPosts);

});


// GET /comments (obtener comentarios)
app.get("/comments", (req, res) => {
  
    res.json(comments);
})

// POST /comments (agregar comentarios)
app.post("/comments",  (req, res) => {
    console.log(req.body);
    const {postId, usuario, correo, comentario} = req.body;

    const lastId = getLastId(comments);

        const newComments={
        // id: comments.length +1
        id: lastId +1,
        postId: postId,
        name: usuario,
        email: correo,
        body: comentario
    }

    comments.push(newComments);

    res.json(newComments);

});




app.listen(PORT, ()=> {
    console.log(`Servidor iniciado en ${URL}:${PORT}`);
});
