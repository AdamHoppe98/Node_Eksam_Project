// import { Router } from 'express';
// import session from 'express-session';

// const router = Router();

// const users = [];

// router.use(session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 24 * 60 * 60 * 1000 } // 24 hours
// }));


// router.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     const user = users.find(user => user.username === username && user.password === password);

//     if (!user) {
//         return res.status(401).send({ message: 'Invalid credentials' });
//     }
//     req.session.user = {
//         id: user.id,
//         username: user.username
//     };

//     res.json({ message: 'Login successful', user: req.session.user });
// });

// router.post('/logout', (req, res) => {
//   req.session.destroy((error) => {
//     if (error) {
//       return res.status(500).send({ message: 'Logout failed' });
//     }
//     res.send({ message: 'Logout successful' });
//   });
// });

// export default router;