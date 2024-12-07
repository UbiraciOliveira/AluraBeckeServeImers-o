/*import getTodosposts from "../models/postsModel.js";

export async function listenPosts(req, res) {
  try {
    const posts = await getTodosposts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar posts", erro: error.message });
  }
}





/*import getTodosposts from "../models/postsModel.js";

export async function listenPosts(req, res) {
    try {
        const posts = await getTodosposts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar posts", erro: error.message });
    } {

    }

}*/
