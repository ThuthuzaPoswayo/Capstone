import { createPool } from "mysql2";
import 'dotenv/config'

export const db = createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})

db.on('connection', () => {
    console.log('Connected to database')
})
