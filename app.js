require("dotenv").config();
require("express-async-errors");

//async errors

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const productRouter = require("./routes/products");

const notFoundMIddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>products routes</a>");
});

app.use("/api/v1/products", productRouter);
// products routes

app.use(notFoundMIddleware);
app.use(errorMiddleware);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`Server is listen on port ${process.env.PORT}`);
      console.log("mongo db has successfully connected");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
