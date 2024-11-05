import express from 'express';

const app = express();

app.get('/', async (_req, res) => {
    try {
        res.send("Hello World");
    } catch (error) {
        res.status(500).send("Ocorreu um erro.");
    }
});

app.listen(3333, () => {
    console.log('Server funcionando http://localhost:3333');
});