import { cwd } from "process";
import {getTodosposts, criarPost } from "../models/postsModels.js";
import fs from "fs";

export async function listarPosts(req, res)
{
   const posts = await getTodosposts();  
   res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
   const novoPost = req.bady;
   try {
         const postCriado = await criarPost(novoPost);
         res.status(200).json(postCriado);
         
   } catch(erro) {
      console.error(erro.message);
      res.status(500).json({"Erro":"Falha na requisição!"});
   }

}
export async function uploadImagem(req, res) {
   const novoPost = {
      descricao: "",
      imgUrl: req.file.originalname,
      alt: ""

   };

   try {
      const postCriado = await criarPost(novoPost);
      const imagemAtualizada = 'uploads/${postCriado.insertdId}.png'
      fs.renameSync(req.file.path, imagemAtualizada)
      req.status(200).json(postCriado);
        
   } catch(erro) {
     console.error(erro.message);
     res.status(500).json({"Eroor":"Falha na requisição"}) 
   }
   
}



   
