import { MongoClient } from 'mongodb'; // Importa o cliente do MongoDB para conectar ao banco de dados

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        console.log('Iniciando conexão com o MongoDB...'); // Log de início de conexão
        mongoClient = new MongoClient(stringConexao); // Cria uma instância do cliente do MongoDB
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect(); // Conecta ao MongoDB
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient; // Retorna a conexão para ser usada em outros módulos
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro); // Exibe o erro de conexão no console
        process.exit(); // Encerra o processo se ocorrer erro
    }
}






// import { MongoClient } from 'mongodb'; // Importa o cliente do MongoDB para conectar ao banco de dados

// export default async function conectarAoBanco(stringConexao) {
//     let mongoClient;

//     try {
//         mongoClient = new MongoClient(stringConexao); // Cria uma instância do cliente do MongoDB
//         console.log('Conectando ao cluster do banco de dados...');
//         await mongoClient.connect(); // Conecta ao MongoDB
//         console.log('Conectado ao MongoDB Atlas com sucesso!');

//         return mongoClient; // Retorna a conexão para ser usada em outros módulos
//     } catch (erro) {
//         console.error('Falha na conexão com o banco!', erro); // Exibe o erro de conexão no console
//         process.exit(); // Encerra o processo se ocorrer erro
//     }
// }
