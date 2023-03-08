import express, { Express, Request, Response } from 'express';

const app: Express = express();

const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('tsc server run');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at <https://localhost>:${port}`);
    console.log('냐옹');
});

