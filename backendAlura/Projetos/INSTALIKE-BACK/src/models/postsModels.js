import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados, localizada no arquivo dbConfig.js

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão obtida da variável de ambiente STRING_CONEXAO. Essa string contém informações como o nome do banco, usuário e senha. O 'await' indica que essa operação é assíncrona e espera a conexão ser estabelecida antes de continuar.

export default async function getTodosPosts(){
    const db = conexao.db("imersao-Instabyte"); // Acessa o banco de dados com o nome "imersao-Instabyte" dentro da conexão estabelecida.
    const colecao = db.collection("posts"); // Acessa a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray(); // Realiza uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
  }
  export async function criarPost(novoPost) {
    const db = conexao.db("imersao-Instabyte"); 
    const colecao = db.collection("posts"); 
    return colecao.insertOne(novoPost); // ver função na documentação
  }