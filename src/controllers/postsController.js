// import { getTodosPosts, criarPost } from "../models/postsModels.js"; // Importa as funções de manipulação de dados
// //import {getTodosPosts, criarPost} from "./routes/models/postsModel.js";
// import fs from "fs";

// export async function listarPosts(req, res) {
//     // Chama a função para buscar os posts
//     const posts = await getTodosPosts();
//     // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
//     res.status(200).json(posts);
// }

// export async function postarNovoPost(req, res) {
//     const novoPost = req.body;
//     try {
//         const postCriado = await criarPost(novoPost);
//         res.status(200).json(postCriado);  
//     } catch(erro) {
//         console.error(erro.message);
//         res.status(500).json({"Erro":"Falha na requisição"})
//     }
// }

// export async function uploadImagem(req, res) {
//     const novoPost = {
//         descricao: "",
//         imgUrl: req.file.originalname,
//         alt: ""
//     };

//     try {
//         const postCriado = await criarPost(novoPost);
//         const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
//         fs.renameSync(req.file.path, imagemAtualizada)
//         res.status(200).json(postCriado);  
//     } catch(erro) {
//         console.error(erro.message);
//         res.status(500).json({"Erro":"Falha na requisição"})
//     }
// }

import { getTodosPosts, criarPost } from "../models/postsModels.js"; // Importa as funções de manipulação de dados
import fs from "fs"; // Importa o sistema de arquivos para renomear arquivos (usado em upload de imagens)

// Função para listar todos os posts
export async function listarPosts(req, res) {
    console.log('Requisição para listar todos os posts recebida'); // Log de requisição recebida
    try {
        const posts = await getTodosPosts(); // Chama a função do modelo para recuperar os posts
        console.log('Posts recuperados com sucesso'); // Log de sucesso
        res.status(200).json(posts); // Retorna os posts no formato JSON com status 200 (OK)
    } catch (erro) {
        console.error("Erro ao listar posts:", erro.message); // Loga o erro no console
        res.status(500).json({ erro: "Erro ao listar posts" }); // Retorna uma resposta de erro
    }
}

// Função para criar um novo post
export async function postarNovoPost(req, res) {
    console.log('Requisição para criar um novo post recebida'); // Log de requisição recebida
    const novoPost = req.body; // Obtém os dados do post do corpo da requisição
    try {
        const postCriado = await criarPost(novoPost); // Insere o novo post no banco
        console.log('Post criado com sucesso'); // Log de sucesso
        res.status(200).json(postCriado); // Retorna o post criado no formato JSON com status 200 (OK)
    } catch (erro) {
        console.error("Erro ao criar post:", erro.message); // Loga o erro no console
        res.status(500).json({ erro: "Erro ao criar post" }); // Retorna uma resposta de erro
    }
}

// Função para fazer upload de uma imagem
export async function uploadImagem(req, res) {
    console.log('Requisição para upload de imagem recebida'); // Log de requisição recebida
    const novoPost = {
        descricao: "", // Descrição padrão para o post com imagem
        imgUrl: req.file.originalname, // Nome original do arquivo enviado
        alt: "" // Texto alternativo padrão
    };

    try {
        const postCriado = await criarPost(novoPost); // Insere o post no banco
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`; // Define o caminho da imagem renomeada
        fs.renameSync(req.file.path, imagemAtualizada); // Renomeia a imagem
        console.log('Imagem carregada e renomeada com sucesso'); // Log de sucesso
        res.status(200).json(postCriado); // Retorna o post criado com status 200 (OK)
    } catch (erro) {
        console.error("Erro ao fazer upload da imagem:", erro.message); // Loga o erro no console
        res.status(500).json({ erro: "Erro ao fazer upload da imagem" }); // Retorna uma resposta de erro
    }
}
