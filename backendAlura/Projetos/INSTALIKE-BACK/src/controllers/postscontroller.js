import {getTodosPosts, criarPost} from "../models/postsModels.js";

export async function listaPosts(req, res) { // Define uma rota GET para a URL "/posts". Quando uma requisição GET for feita para essa URL, a função dentro do callback será executada.
    const posts = await getTodosPosts(); // Chama a função para obter todos os posts do banco de dados.
    res.status(200).json(posts); // Envia uma resposta com status 200 (OK) e o array de posts no formato JSON para o cliente.
  }

export async function postarNovoPost(req, res) {
  const novoPost = req.body;
  try{
    const postCriado = await criarPost(novoPost);
    res.status(200).json(postCriado);
  }catch (erro){ //dentro () ta a variavel que vai armazenar o erro
      console.error(erro.message);
      res.status(500).json({"Erro":"Falha na requisição"})
  }  
}