import 'dotenv/config'; 

import express from 'express'
const app = express();
app.use(express.json())

const PORT = process.env.PORT ?? 8080;

import helmet from 'helmet';
app.use(helmet());

import session from 'express-session'
app.use(session({
  secret: process.env.SESSION_KEY, 
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

import { limiter } from './middleware/rateLimiter.js';
app.use(limiter);

import authRouter from './routers/authRouter.js'
app.use(authRouter);

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