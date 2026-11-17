import { Router } from 'express'

const router = Router();


import { getUser, createUser } from '../repositories/userRepository.js';
import { authLimiter } from '../middleware/rateLimiter.js';
import { sendMail } from '../util/mailUtil.js';

router.post('/api/auth/login', authLimiter, async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({ errorMessage: "Missing username or password" });
    }

    try {
        const user = await getUser(username, password);
        req.session.user = user;
        res.send({ data: user })
    } catch (error) {
        res.status(error.status).send({ errorMessage: error.message });
    }
});

router.post('/api/auth/logout', async (req, res) => {
    req.session.destroy(() => {
        res.send({ data: "You are now logged out." })
    })
});

router.post('/api/auth/signup', authLimiter, async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password) {
        return res.status(400).send({ errorMessage: "Missing username or password" });
    }
    try {
        const newUser = await createUser(username, password, email);
        req.session.user = newUser;
        const emailToSend = {username: newUser.username, subject: "Welcome to Mealo", from: "Mealo", email: newUser.email }
        await sendMail(emailToSend)
        res.status(201).send({ data: newUser })
    } catch (error) {
        res.status(409).send({ errorMessage: error.message });
    }
})


export default router;