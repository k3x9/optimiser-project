const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connect = require("./helpers/connect");

const app = express();
const port = 3000;

// Import Routes
const movieRegister = require("./routes/movie");
const foodRegister = require("./routes/food");
const adventureRegister = require("./routes/adventure");
const eventsRegister = require("./routes/events");
const moocRegister = require("./routes/mooc");
const sightseeingRegister = require("./routes/sightseeing");

// Middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());

// Route Middleware
app.use("/api/movie", movieRegister);
app.use("/api/food", foodRegister);
app.use("/api/adventure", adventureRegister);
app.use("/api/events", eventsRegister);
app.use("/api/mooc", moocRegister);
app.use("/api/sight", sightseeingRegister);

connect();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
