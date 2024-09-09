import { db } from "../config/index.js";


class Booking {
    async fetchBookings(req, res) {
        const strQry = `
            SELECT *
            FROM bookings;
        `;
        try {
            const [results] = await db.query(strQry);
            res.json({
                status: 200,
                results
            });
        } catch (err) {
            console.error('Error retrieving bookings:', err);
            res.json({
                
                status: 500,
                msg: 'Error retrieving bookings.'
            });
        }
    }

    async fetchBooking(req, res) {
        const strQry = `
            SELECT *
            FROM bookings
            WHERE booking_id = ?;
        `;
        try {
            const [result] = await db.query(strQry, [req.params.id]);
            res.json({
                status: 200,
                result: result[0]
            });
        } catch (err) {
            console.error('Error retrieving booking:', err);
            res.json({
                status: 500,
                msg: 'Error retrieving booking.'
            });
        }
    }

    async addBooking(req, res) {
        let data = req.body;
        const strQry = `
            INSERT INTO bookings
            SET ?;
        `;
        try {
            await db.query(strQry, [data]);
            res.json({
                msg: 'Booking added successfully.'
            });
        } catch (err) {
            console.error('Error adding booking:', err);
            res.json({
                status: 500,
                msg: 'Error adding booking.'
            });
        }
    }

    async updateBooking(req, res) {
        let data = req.body;
        const strQry = `
            UPDATE bookings
            SET ?
            WHERE booking_id = ?;
        `;
        try {
            await db.query(strQry, [data, req.params.id]);
            res.json({
                msg: 'Booking updated successfully.'
            });
        } catch (err) {
            console.error('Error updating booking:', err);
            res.json({
                status: 500,
                msg: 'Error updating booking.'
            });
        }
    }

    async deleteBooking(req, res) {
        const strQry = `
            DELETE FROM bookings
            WHERE booking_id = ?;
        `;
        try {
            await db.query(strQry, [req.params.id]);
            res.json({
                msg: 'Booking deleted successfully.'
            });
        } catch (err) {
            console.error('Error deleting booking:', err);
            res.json({
                status: 500,
                msg: 'Error deleting booking.'
            });
        }
    }
}

export { Booking };