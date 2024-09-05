import { Router } from 'express';
import { User } from '../models/User.js'; 

const userRouter = Router();
const user = new User(); 

userRouter.get('/', (req, res) => { 
    user.fetchUsers(req, res); 
});

userRouter.get('/:id', (req, res) => { 
    user.fetchUser(req, res);
});

userRouter.post('/register', (req, res) => { 
    user.registerUser(req, res);
});

userRouter.patch('/:id', (req, res) => { 
    user.updateUser(req, res);
});

userRouter.delete('/:id', (req, res) => { 
    user.deleteUser(req, res);
});

userRouter.post('/login', (req, res) => { 
    user.login(req, res);
});

export { userRouter };
