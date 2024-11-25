import express from "express";
import { listaPosts, postarNovoPost } from "../controllers/postscontroller.js";

const routes = (app) =>{
    app.use(express.json()); // Habilita o middleware para que a aplicação possa entender requisições com corpo no formato JSON.
    app.get("/posts",listaPosts);//rota para pegar todos os posts get peaga os registros do bd
    app.post("/posts",postarNovoPost) //rota para criar um novo post
}

export default routes;