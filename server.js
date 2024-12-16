// import express from "express";
// import routes from "./src/routes/postsRoutes.js";

// const app = express();
// app.use(express.static("uploads"));
// routes(app);
// app.listen(3000, () => {
//   console.log("Comando para executar o servidor é: node server.js");
//   console.log("Servidor escutando... Na porta padrão 3000 Pronto para uso!");
// });

import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app);
app.listen(3000, () => {
  console.log("Comando para executar o servidor é: node server.js");
  console.log("Servidor escutando... Na porta padrão 3000 Pronto para uso!");
});

