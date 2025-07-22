// https://chatgpt.com/share/687e446a-cd80-800d-bef1-5502b309e015

// usar deep links para node passar responsabilidade de navegação ao react
// Servidor Express para servir React com suporte a deep links

import express from 'express';
import path from 'path';
import history from 'connect-history-api-fallback';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(history());
// Servir arquivos estáticos da pasta 'dist'
app.use(express.static(path.join(path.resolve(), 'dist')));

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);
});
