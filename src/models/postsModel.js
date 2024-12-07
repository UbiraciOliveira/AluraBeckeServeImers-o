/*import conectarAoBanco from "../config/dbConfig.js";

let conexao;
try {
  conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
  console.log("Conectado ao banco de dados com sucesso!");
} catch (error) {
  console.error("Falha ao conectar ao banco de dados:", error);
  process.exit(1);
}

export default async function getTodosposts() {
  try {
    const backServer = "nome_do_banco_de_dados"; // Substitua pelo nome correto
    const db = conexao.db(backServer);
    const colecao = db.collection("posts");
    return await colecao.find().toArray();
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw error;
  }
}*/






/*import conectarAoBanco from "../config/dbConfig.js";
// Certifique-se de ter uma STRING_CONEXAO válida no arquivo .env
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
if (!conexao) {
  console.error("Falha na conexão com o banco de dados!");
  process.exit(1); // Finaliza o programa caso a conexão falhe
}

export default async function getTodosposts() {
    try {
      const backServer = backServer;
      const db = conexao.db(backServer);
      const colecao = db.collection("posts");
      return await colecao.find().toArray();
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      throw error;
    }
  }*/
  