import { db } from "../config/index.js";

class User {
    async fetchUsers(req, res) {
        const strQry = `
            SELECT name, email, role, phone
            FROM Users;
        `;
        try {
            const [results] = await db.query(strQry);
            res.json({
                status: 200,
                results
            });
        } catch (err) {
            console.error('Error retrieving users:', err); 
            res.json({
                status: 500,
                msg: 'Error retrieving users.'
            });
        }
    }

    async fetchUser(req, res) {
        const strQry = `
            SELECT userID, name, email, role, phone
            FROM Users
            WHERE userID = ?;
        `;
        try {
            const [result] = await db.query(strQry, [req.params.id]);
            res.json({
                status: 200,
                result: result[0]
            });
        } catch (err) {
            console.error('Error retrieving user:', err); 
            res.json({
                status: 500,
                msg: 'Error retrieving user.'
            });
        }
    }

    async registerUser(req, res) {
        let data = req.body;
        const strQry = `
            INSERT INTO Users
            SET ?;
        `;
        try {
            await db.query(strQry, [data]);
            res.json({
                msg: 'You are now registered.'
            });
        } catch (err) {
            console.error('Error registering user:', err); 
            res.json({
                status: 500,
                msg: 'This email has already been registered.'
            });
        }
    }

    async updateUser(req, res) {
        let data = req.body;
        const strQry = `
            UPDATE Users
            SET ?
            WHERE userID = ?;
        `;
        try {
            await db.query(strQry, [data, req.params.id]);
            res.json({
                msg: 'The user record was updated.'
            });
        } catch (err) {
            console.error('Error updating user:', err); 
            res.json({
                status: 500,
                msg: 'Error updating user.'
            });
        }
    }

    async deleteUser(req, res) {
        const strQry = `
            DELETE FROM Users
            WHERE userID = ?;
        `;
        try {
            await db.query(strQry, [req.params.id]);
            res.json({
                msg: 'User information was removed.'
            });
        } catch (err) {
            console.error('Error deleting user:', err); 
            res.json({
                status: 500,
                msg: 'Error deleting user.'
            });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;
        const strQry = `
            SELECT userID, name, email, password, role, phone
            FROM Users
            WHERE email = ?;
        `;
        try {
            const [result] = await db.query(strQry, [email]);
            if (result.length === 0 || result[0].password !== password) {
                res.json({
                    status: 401,
                    msg: 'Invalid email or password.'
                });
            } else {
                res.json({
                    status: 200,
                    result: result[0]
                });
            }
        } catch (err) {
            console.error('Error logging in user:', err); 
            res.json({
                status: 500,
                msg: 'Error logging in user.'
            });
        }
    }
}

export { User };
