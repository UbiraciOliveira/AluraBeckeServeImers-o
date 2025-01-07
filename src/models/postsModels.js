import conectarAoBanco from "../config/dbConfig.js"; // Importa a função de conexão com o banco

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco usando a variável de ambiente com a string de conexão

// Recupera todos os posts da coleção "posts"
export async function getTodosPosts() {

    console.log('Recuperando todos os posts da coleção "posts"'); // Log de recuperação de posts
    const db = conexao.db("backServer"); // Seleciona o banco de dados "backServer"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts"
    return colecao.find().toArray(); // Retorna todos os documentos da coleção como um array
}
//Insere um novo post na coleção "posts"
export async function criarPost(novoPost) {
    const db = conexao.db("backServer"); // Seleciona o banco de dados "backServer"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts"
    return colecao.insertOne(novoPost); // Insere o documento e retorna o resultado
}

export async function atualizarPost(id, novoPost) {
   console.log('Atualizando um novo post na coleção "posts"'); // Log de inserção de post
    const db = conexao.db("backServer"); // Seleciona o banco de dados "backServer"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts"
    const objID = objectID.createFromHexString(id)
    return colecao.updateOne({_id: new objectID(objID)}, {$set: novoPost}); 
}