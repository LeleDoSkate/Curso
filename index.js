const express = require('express');
const app = express();











app.get("/", (req, res) => {
    //Retornar texto como resposta 
    res.send("Opa meu chegado, Se aconchegue a minha API.");
});

//Criar a rota visualizar 
//Endereço ára acessar a api atravêis de apricação extrema: http://localhost:8080
app.get("/users/:id", (req, res) => {

    const { id } = req.params;
    const { sit } = req.query;
    return res.json({
        id : "Corsa bravo",
        name: "Lele",
        email: "ohmlkdoido@doido.com.br",
        sit: "Marea Turbo",
    });
});













app.listen(8080, () => {
    console.log("Meu patrao: http://localhost:8080")
})