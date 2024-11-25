import express from "express";
import multer from "multer";
import { listaPosts, postarNovoPost, uploadImagem } from "../controllers/postscontroller.js";

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  }
});

// Configura o multer para usar o armazenamento definido
const upload = multer({ storage });

// Cria as rotas para a aplicação
const routes = (app) => {
  app.use(express.json()); // Habilita o middleware para lidar com dados JSON nas requisições

  app.get("/posts", listaPosts); // Rota para obter todos os posts (método GET)
  app.post("/posts", postarNovoPost); // Rota para criar um novo post (método POST)

  // Rota para upload de imagens
  app.post("/upload", upload.single("imagem"), uploadImagem);
  // - upload.single("imagem"): Configura o multer para lidar com um único arquivo com o nome "imagem"
  // - uploadImagem: Chama a função controladora para processar a imagem após o upload
};

export default routes;