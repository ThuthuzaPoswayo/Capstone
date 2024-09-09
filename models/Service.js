import { db } from "../config/index.js";

class Services {
    async fetchServices(req, res) {
        const strQry = `
            SELECT *
            FROM Services;
        `;
        try {
            const [results] = await db.query(strQry);
            res.json({
                status: res.statusCode,
                results
            });
        } catch (err) {
            console.error('Error retrieving services:', err); 
            res.json({
                status: 500,
                msg: 'Error retrieving services.'
            });
        }
    }

    async fetchService(req, res) {
        const strQry = `
            SELECT *
            FROM Services
            WHERE service_id = ?;
        `;
        try {
            const [result] = await db.query(strQry, [req.params.id]);
            res.json({
                status: 200,
                result: result[0]
            });
        } catch (err) {
            console.error('Error retrieving service:', err); 
            res.json({
                status: 500,
                msg: 'Error retrieving service.'
            });
        }
    }

    async addService(req, res) {
        let data = req.body;
        const strQry = `
            INSERT INTO Services
            SET ?;
        `;
        try {
            await db.query(strQry, [data]);
            res.json({
                msg: 'Service added successfully.'
            });
        } catch (err) {
            console.error('Error adding service:', err); 
            res.json({
                status: 500,
                msg: 'Error adding service.'
            });
        }
    }

    async updateService(req, res) {
        let data = req.body;
        const strQry = `
            UPDATE Services
            SET ?
            WHERE service_id = ?;
        `;
        try {
            await db.query(strQry, [data, req.params.id]);
            res.json({
                msg: 'The service record was updated.'
            });
        } catch (err) {
            console.error('Error updating service:', err); 
            res.json({
                status: 500,
                msg: 'Error updating service.'
            });
        }
    }

    async deleteService(req, res) {
        const strQry = `
            DELETE FROM Services
            WHERE service_id = ?;
        `;
        try {
            await db.query(strQry, [req.params.id]);
            res.json({
                msg: 'Service information was removed.'
            });
        } catch (err) {
            console.error('Error deleting service:', err); 
            res.json({
                status: 500,
                msg: 'Error deleting service.'
            });
        }
    }
}

export { Services};
