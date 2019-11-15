import express from 'express';

const app = express();

app.get('/', (_req, res) => res.json('OK'));

export default app;
