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

// Import bcrypt to hash/compare passwords
const bcrypt = require('bcrypt');

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await db.query('SELECT * FROM Users WHERE email = ?', [email]);

    if (user.length === 0) {
      // User does not exist
      return res.json({ msg: 'User not found. Please sign up.', result: false });
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
      // Password is incorrect
      return res.json({ msg: 'Incorrect password. Please try again.', result: false });
    }

    // If password is correct, generate a token
    const token = jwt.sign({ userId: user[0].user_id, role: user[0].role }, SECRET_KEY, { expiresIn: '1h' });

    // Respond with success, token, and user data
    res.json({ msg: 'Login successful', result: true, token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', result: false });
  }
});


export { userRouter };
