import express from 'express';
import 'dotenv/config'; // Import dotenv with ES module syntax
import { userRouter } from './controllers/UserController.js'; // Import your user router/controller
import { serviceRouter } from './controllers/ServiceController.js';
import { bookingsRouter } from './controllers/BookingsController.js'
import{ reviewsRouter} from "./controllers/ReviewsController.js";

const port = process.env.PORT || 3000;
const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./static')); // Serve static files
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
  })

// Use the routers for different routes
app.use('/user', userRouter); // Routes for user-related actions
app.use('/services', serviceRouter); // Routes for service-related actions
app.use('/booking', bookingsRouter); // Routes for booking-related actions
app.use('/review', reviewsRouter); // Routes for booking-related actions

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile('static/html/index.html', { root: '.' }); // Serve the home page
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
