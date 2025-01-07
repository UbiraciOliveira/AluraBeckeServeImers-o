import express from 'express'; // Importa o framework Express
import routes from './src/routes/postsRoutes.js'; // Importa as rotas dos posts

// Cria uma instância do Express
const app = express();

// Configura o servidor para servir arquivos estáticos da pasta "uploads"
app.use(express.static("uploads"));

// Define as rotas
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Comando para executar o servidor é: node server.js");
    console.log("Servidor escutando... Na porta padrão 3000 Pronto para uso!");
});