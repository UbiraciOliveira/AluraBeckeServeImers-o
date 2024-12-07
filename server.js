import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
routes(app);
//app.use(express.json());

app.listen(3000, () => {
  console.log("Comando para executar o servidor é: node server.js");
  console.log("O npm só e usado para installar ou iniciar!");
  console.log("Servidor escutando... Na porta padrão 3000 Pronto para uso!");
});