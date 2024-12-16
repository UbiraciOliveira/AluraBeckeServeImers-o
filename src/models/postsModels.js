// import conectarAoBanco from "../../config/dbConfig.js"
// // Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente
// const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// // Função assíncrona para buscar todos os posts do banco de dados
// export async function getTodosPosts() {
//     // Seleciona o banco de dados "imersao-instabytes"
//     const db = conexao.db("backServer");
//     // Seleciona a coleção "posts" dentro do banco de dados
//     const colecao = db.collection("posts");
//     // Retorna um array com todos os documentos da coleção
//     return colecao.find().toArray();
// }

// export async function criarPost(novoPost) {
//     const db = conexao.db("backServer");
//     const colecao = db.collection("posts");
//     return colecao.insertOne(novoPost)
// }

import conectarAoBanco from "../config/dbConfig.js"; // Importa a função de conexão com o banco

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco usando a variável de ambiente com a string de conexão

// Recupera todos os posts da coleção "posts"
export async function getTodosPosts() {
    console.log('Recuperando todos os posts da coleção "posts"'); // Log de recuperação de posts
    const db = conexao.db("backServer"); // Seleciona o banco de dados "backServer"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts"
    return colecao.find().toArray(); // Retorna todos os documentos da coleção como um array
}

// Insere um novo post na coleção "posts"
export async function criarPost(novoPost) {
    console.log('Inserindo um novo post na coleção "posts"'); // Log de inserção de post
    const db = conexao.db("backServer"); // Seleciona o banco de dados "backServer"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts"
    return colecao.insertOne(novoPost); // Insere o documento e retorna o resultado
}
