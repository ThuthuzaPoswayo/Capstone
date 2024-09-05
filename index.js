import express from "express";
import "dotenv/config"; // Import dotenv with ES module syntax
import { userRouter } from "./controllers/UserController.js"; // Import your user router/controller

const port = process.env.PORT || 3000;
const app = express();

// Set up middleware
app.use(
  express.static("./static"), // Use relative path to the static directory
  express.json(),
  express.urlencoded({ extended: true })
);

// Use the user router
app.use("/user", userRouter); // Assuming you have routes for /user in UserController.js

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile("static/html/index.html", { root: "." }); // Use relative path with the root option
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
