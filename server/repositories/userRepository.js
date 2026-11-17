const users = [
    {
        id: 1,
        username: "Adam",
        email: "adamhoppe98@gmail.com",
        hashedPassword: "$2b$14$q90NI5g89vPQiFrjT48mn.k3KSvscs6O4OKPbGGLe6JWIxwEPrP/y"
    }
]

let nextId = 2;

import { hashPassword, isCorrectPassword } from "../util/passwordUtil.js"

export async function getUser(username, password) {
    const user = users.find((user) => user.username === username);
    if (user) {
        if (isCorrectPassword(password, user.hashedPassword)) {
            delete user.hashedPassword;
            return user;
        }
        const error = new Error("Wrong password");
        error.status = 401;
        throw error;
    }
    const error = new Error("Wrong username");
    error.status = 404;
    throw error;
}

export async function createUser(username, password, email) {
    const userAlreadyExists = users.find(user => user.username === username);
    if (!userAlreadyExists){    
        const user = { username, email };
        user.id = nextId++;
        user.hashedPassword = hashPassword(password);
        users.push(user);
        return user;
    }
    throw new Error("User Already exists");

}