import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

// Certifique-se de ter uma STRING_CONEXAO válida no arquivo .env
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
if (!conexao) {
  console.error("Falha na conexão com o banco de dados!");
  process.exit(1); // Finaliza o programa caso a conexão falhe
}

const app = express();
app.use(express.json());

// Defina o nome do banco de dados
const backServer = "backServer"; // Substitua pelo nome do banco no MongoDB

// Função para buscar todos os posts do banco
async function getTodospostes() {
  try {
    const db = conexao.db(backServer);
    const colecao = db.collection("posts");
    return await colecao.find().toArray();
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw error;
  }
}

// Endpoint para obter todos os posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await getTodospostes();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar posts", erro: error.message });
  }
});

// Endpoint simples de teste
app.get("/api", (req, res) => {
  res.status(200).json({ mensagem: "API funcionando!" });
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Comando para executar o servidor é: node server.js");
  console.log("O npm só é usado para instalar ou iniciar!");
  console.log("Servidor escutando na porta 3000. Pronto para uso!");
});





















// import express from "express";
// import conectarAoBanco from "./src/config/dbConfig.js";
// const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// //console.log(process.env.STRING_CONEXAO)

// const posts = [
//     { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
//     { id: 2, descricao: "Gato preto brincando com um novelo de lã", imagem: "https://placekitten.com/400/200" },
//     { id: 3, descricao: "Paisagem montanhosa ao pôr do sol", imagem: "https://source.unsplash.com/random" },
//     { id: 4, descricao: "Cachorro correndo na praia", imagem: "https://images.dog.ceo/breeds/hound/afghan.jpg" },
//     { id: 5, descricao: "Comida caseira deliciosa", imagem: "https://www.pexels.com/photo/food-plate-delicious-meal-dinner-4157879" }
    
//   ];
// const app = express();
// app.use(express.json())

// app.listen(3000, () => {
//     console.log("Comando para executar o servidor é: node server.js");
//     console.log("O npm só e usado para installar ou iniciar!");
//     console.log("Servidor escutando... Na porta padrão 3000 Pronto para uso!");

// });

// async function getTodospostes() {
//     const db = conexao.db(backServer);
//     const colecao = db.collection("posts");
//     return colecao.find().toArray();
// } 

// app.get("/posts", async (req, res) => {
//     const posts = await getTodospostes();
//     res.status (200).json (posts);
// app.get("/api", (req, resp) => {
   
//    });
// });

// function buscarPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id)

//     });
// }

// app.get("/posts/:id", (req, res) => {  
//     const index = buscarPostPorID(req.params.id);
//     res.status (200).json(posts[index]);
// });
