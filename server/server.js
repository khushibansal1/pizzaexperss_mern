const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

require("colors");
const morgan = require("morgan");

// Config dotenv
dotenv.config();

// Connection to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

app.get("/", (req, res) => {
  res.send("<h1>Hello From Node Server via nodemon</h1>");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Server Error");
});

// Set the port
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.bgMagenta.white
  );
});
  