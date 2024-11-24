import express from "express";

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato preto brincando com um novelo de lã", imagem: "https://placekitten.com/400/200" },
    { id: 3, descricao: "Paisagem montanhosa ao pôr do sol", imagem: "https://source.unsplash.com/random" },
    { id: 4, descricao: "Cachorro correndo na praia", imagem: "https://images.dog.ceo/breeds/hound/afghan.jpg" },
    { id: 5, descricao: "Comida caseira deliciosa", imagem: "https://www.pexels.com/photo/food-plate-delicious-meal-dinner-4157879" }
    
  ];
const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("Comando para executar o servidor é: node server.js");
    console.log("O npm só e usado para installar ou iniciar!");
    console.log("Servidor escutando... Na porta padrão 3000 Pronto para uso!");

});

app.get("/posts", (req, res) => {
   // res.status (200).json (posts);
//app.get("/api", (req, resp) => {
    res.status (200).send("Ubiraci seja bém vindo a imerção da Alura!");
   //});
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)

    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status (200).json(posts[index]);
});
