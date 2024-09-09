import express from 'express';
import { Booking } from '../models/Bookings.js'; // Ensure this path is correct and export is correct


const bookingsRouter = express.Router();
const bookingController = new Booking(); // Create an instance of Booking

// Use built-in JSON parser middleware
bookingsRouter.use(express.json()); 

// Fetch all bookings
bookingsRouter.get('/', (req, res) => {
    bookingController.fetchBookings(req, res);
});

// Fetch a specific booking by ID
bookingsRouter.get('/:id', (req, res) => {
    bookingController.fetchBooking(req, res);
});

// Add a new booking
bookingsRouter.post('/add', (req, res) => {
    bookingController.addBooking(req, res);
});

// Update an existing booking
bookingsRouter.patch('/:id', (req, res) => {
    bookingController.updateBooking(req, res);
});

// Delete a booking
bookingsRouter.delete('/:id', (req, res) => {
    bookingController.deleteBooking(req, res);
});

export { bookingsRouter };
