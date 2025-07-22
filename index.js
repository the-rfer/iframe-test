import history from 'connect-history-api-fallback';
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(history());
// Servir arquivos estáticos da pasta 'dist'
app.use(express.static(path.join(path.resolve(), 'dist')));

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);
});
