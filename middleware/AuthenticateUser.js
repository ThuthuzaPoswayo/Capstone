import 'dotenv/config';
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

// Function to create a token
function createToken(user) {
    return sign(
        {
            emailAdd: user.emailAdd,
            pwd: user.pwd
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '1h' // Token expires in 1 hour
        }
    );
}

// Middleware function to verify a token
function verifyAToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    // Check if the Authorization header is present
    if (authHeader) {
        // Extract token from the "Bearer <token>" format
        const token = authHeader.split(' ')[1];

        try {
            // Verify the token
            const decoded = verify(token, process.env.SECRET_KEY);
            req.user = decoded; // Attach the decoded token payload to the request object
            next(); // Continue to the next middleware/route
        } catch (err) {
            // Handle invalid or expired token
            res.status(401).json({
                status: 401,
                msg: 'Invalid or expired token. Please login again.'
            });
        }
    } else {
        // If no token is provided
        res.status(401).json({
            status: 401,
            msg: 'Please login.'
        });
    }
}

export {
    createToken, verifyAToken
};
