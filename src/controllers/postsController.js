import { getTodosposts } from "../models/postsModels.js";

export async function listarPosts(req, res)
{
   const posts = await getTodosposts();  
   res.status(200).json(posts);
}