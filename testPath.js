import fs from 'fs';

const caminho = './src/routes/postsRoutes.js';

if (fs.existsSync(caminho)) {
    console.log('Arquivo encontrado!');
} else {
    console.error('Arquivo não encontrado:', caminho);
}
