import history from 'connect-history-api-fallback';
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(history());

app.use((_, res, next) => {
    res.removeHeader('X-Frame-Options');
    res.setHeader('Content-Security-Policy', `frame-ancestors *`);
    next();
});

app.use(express.static(path.join(path.resolve(), 'dist')));

app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);
});
