import { createPool } from "mysql2/promise";
import 'dotenv/config';

export const db = createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: 3306 // Ensure the port is specified
});

db.on('connection', () => {
    console.log('Connected to database');
});

db.on('error', (err) => {
    console.error('Database connection error:', err);
});
