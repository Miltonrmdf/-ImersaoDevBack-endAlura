import express from "express";

const app = express();
app.listen(3000,() =>{ //Esta ouvindo a porta 3000 que é uma porta meio padrão que serviços de servidor local usar
    console.log("Servidor escutando...");
});

app.get("/api", (req, res)=>{
    res.status(200).send("Boas vindas à imrersão!");
}); //definindo a rota

app.get("/livros", (req, res)=>{
    const livro ={
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        ano: 1954,
        genero: 'Fantasia',
    }
    res.json(livro);
});