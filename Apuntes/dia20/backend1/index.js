const express = require("express");
const app =  express();
const PORT = 3000;


// Mis rutas 
// GET
app.get("/", (req, res)=>{
    // console.log("Req es: ", req);
    // console.log("Response es: ", res);
    res.send("Accediste al Home!")

});

app.get("/usuario", (req, res)=>{
    res.send("Accediste a usuarios")
});

app.get("/usuario/:nombre/:id", (req, res) =>{
    res.send(`usuario ${req.params.nombre} (${req.params.id}) actualizado`)
});


//POST
app.post("/usuario", (req, res)=>{
    res.send("Creaste un nuevo usuario")
});

app.listen(PORT, () => {
    console.log("Mi primer servidore wev corriendo en el puerto: "+PORT)
})