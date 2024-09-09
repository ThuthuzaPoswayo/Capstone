import express from 'express';
import bodyParser from 'body-parser';
import { Review } from '../models/Reviews.js'


const reviewsRouter = express.Router();
const reviewController = new Review()
reviewsRouter.use(bodyParser.json());

// Fetch all reviews
reviewsRouter.get('/',  (req, res) => {
    reviewController.fetchReviews(req, res);
});

// Fetch a specific review by ID
reviewsRouter.get('/:id',  (req, res) => {
    reviewController.fetchReview(req, res);
});

// Add a new review
reviewsRouter.post('/add',  (req, res) => {
    reviewController.addReview(req, res);
});

// Update an existing review
reviewsRouter.patch('/:id',  (req, res) => {
    reviewController.updateReview(req, res);
});

// Delete a review
reviewsRouter.delete('/:id',  (req, res) => {
    reviewController.deleteReview(req, res);
});

export { reviewsRouter };
