import express from "express"; // Importa o framework Express para criar a aplicação web
import routes from "./src/routes/postsroutes.js";

const app = express(); // Cria uma instância do Express, que será o núcleo da nossa aplicação.
routes(app)

app.listen(3000, () => { // Inicia o servidor, ouvindo na porta 3000. Quando o servidor estiver pronto, a função dentro do callback será executada.
  console.log("Servidor escutando..."); // Mostra uma mensagem no console indicando que o servidor está em execução.
});


//console.log(process.env.STRING_CONEXAO); // Essa linha seria usada para verificar se a string de conexão está sendo carregada corretamente. 

// function buscarPostPorID(id) {
    //     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id)//parametro para pegar o id
//     res.status(200).json(posts[index]); //posts é o arry, index é a posição do objeto
// });

// // exercício proposto na primeira aula
// app.get("/livros", (req, res)=>{
//     const livro ={
//         titulo: 'O Senhor dos Anéis',
//         autor: 'J.R.R. Tolkien',
//         ano: 1954,
//         genero: 'Fantasia',
//     }
//     res.json(livro);
// });


// const posts = [
//     { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
//     { id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/millie/300/150" },
//     { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150"},
// ];
