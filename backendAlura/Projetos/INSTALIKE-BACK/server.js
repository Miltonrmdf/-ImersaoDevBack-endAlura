import express from "express";

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150"},
];

const app = express();
app.use(express.json());

app.listen(3000, () => { //Esta ouvindo a porta 3000 que é uma porta meio padrão que serviços de servidor local usar
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)//parametro para pegar o id
    res.status(200).json(posts[index]); //posts é o arry, index é a posição do objeto
});

// exercício proposto na primeira aula
app.get("/livros", (req, res)=>{
    const livro ={
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        ano: 1954,
        genero: 'Fantasia',
    }
    res.json(livro);
});



