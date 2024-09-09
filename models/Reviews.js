import { db } from "../config/index.js";


class Review {
    async fetchReviews(req, res) {
        const strQry = `
            SELECT *
           FROM reviews;
        `;
        try {
            const [results] = await db.query(strQry);
            res.json({
                status: 200,
                results
            });
        } catch (err) {
            console.error('Error retrieving reviews:', err); 
            res.json({
                status: 500,
                msg: 'Error retrieving reviews.'
            });
        }
    }

    async fetchReview(req, res) {
        const strQry = `
            SELECT *
            FROM reviews
            WHERE booking_id = ?;
        `;
        try {
            const [result] = await db.query(strQry, [req.params.id]);
            res.json({
                status: 200,
                result: result[0]
            });
        } catch (err) {
            console.error('Error retrieving review:', err); 
            res.json({
                status: 500,
                msg: 'Error retrieving review.'
            });
        }
    }

    async addReview(req, res) {
        let data = req.body;
        const strQry = `
            INSERT INTO reviews
            (booking_id, customer_id, provider_id, rating, review_text)
            VALUES (?, ?, ?, ?, ?);
        `;
        try {
            await db.query(strQry, [data.booking_id, data.customer_id, data.provider_id, data.rating, data.review_text]);
            res.json({
                msg: 'Review added successfully.'
            });
        } catch (err) {
            console.error('Error adding review:', err); 
            res.json({
                status: 500,
                msg: 'Error adding review.'
            });
        }
    }

    async updateReview(req, res) {
        let data = req.body;
        const strQry = `
            UPDATE reviews
            SET rating = ?, review_text = ?
            WHERE booking_id = ?;
        `;
        try {
            await db.query(strQry, [data.rating, data.review_text, req.params.id]);
            res.json({
                msg: 'The review record was updated.'
            });
        } catch (err) {
            console.error('Error updating review:', err); 
            res.json({
                status: 500,
                msg: 'Error updating review.'
            });
        }
    }

    async deleteReview(req, res) {
        const strQry = `
            DELETE FROM reviews
            WHERE booking_id = ?;
        `;
        try {
            await db.query(strQry, [req.params.id]);
            res.json({
                msg: 'Review information was removed.'
            });
        } catch (err) {
            console.error('Error deleting review:', err); 
            res.json({
                status: 500,
                msg: 'Error deleting review.'
            });
        }
    }
}

export { Review };
