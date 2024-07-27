import express, { Router, Request, Response } from 'express';
import { saveUsers } from '../data/saveData';
import { getUsers } from '../data/loadData';

interface User {
    id: number;
    username: string;
    password: string;
}

let users: User[] = getUsers();

const router: Router = express.Router();

router.post('/signUp', (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const userExists = users.some(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser: User = {
        id: Date.now(),
        username,
        password
    };

    users.push(newUser);
    saveUsers(users);
    res.status(201).json({ message: "User created successfully" });
});

router.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.status(200).json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Login failed" });
    }
});

export { router };
