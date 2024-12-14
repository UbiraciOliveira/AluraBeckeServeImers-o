import express from "express"; // Importa o Express para criar o servidor
import multer from "multer"; // Importa o Multer para lidar com uploads
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js"; // Importa as funções controladoras

// Configura o Multer para armazenar imagens enviadas
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define a pasta onde as imagens serão salvas
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Mantém o nome original do arquivo
    }
});

const upload = multer({ dest: "./uploads" , storage}); // Cria uma instância do Multer com a configuração definida

const routes = (app) => {
    app.use(express.json()); // Permite que o Express interprete corpos de requisições no formato JSON
    app.get("/posts", listarPosts); // Endpoint para listar todos os posts
    app.post("/posts", postarNovoPost); // Endpoint para criar um novo post
    app.post("/upload", upload.single("imagem"), uploadImagem); // Endpoint para fazer upload de uma imagem
};

export default routes; // Exporta as rotas para serem usadas no servidor principal
