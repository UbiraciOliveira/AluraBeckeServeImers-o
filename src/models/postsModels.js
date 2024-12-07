import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosposts() {
    const db = conexao.db("backServer");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}