import 'dotenv/config'; 

import express from 'express'
const app = express();
app.use(express.urlencoded());
const PORT = process.env.PORT ?? 8080;

import mealRouter from './routers/mealRouter.js';
app.use(mealRouter);

import mailRouter from './routers/mailRouter.js';
app.use(mailRouter);


const server = app.listen(PORT, error => {
    if (error) {
        console.log("error starting the server", error)
        return
    }
    console.log('Server is running on port', server.address().port)
})