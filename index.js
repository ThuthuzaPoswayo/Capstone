import express from "express";
import { config } from "dotenv";
config();

import path from "path";
import { fileURLToPath } from "url";

const port = process.env.PORT || 3000;

const router = express.Router();

// creating a server
const app = express();

app.use(
  express.static("./static"),
  express.json(),
  express.urlencoded({ extended: true }),
  router
);

router.get("/", (req, res) => {
  res.sendFile(path.join(fileURLToPath(import.meta.url), "static", "html", "index.html"));
});

// listening to a port


app.listen(port, () => {console.log(`Server running on port ${port}`);
});