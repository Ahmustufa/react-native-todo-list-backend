const express = require("express");
const router = express.Router();
const productRoute = require("./productRoute");
const todoRoute = require("./todoRoute");
const ReviewsRoute = require("./ReviewsRoute");
const authRoute = require("./authRoute");

module.exports = (app) => {
  app.get("/", (req, res) => {
    //  res.sendFile(__dirname+ '/index.html')

    res.send("Hello World");
    app.use("/api/products", productRoute);
    app.use("/api/todo", todoRoute);
    app.use("/api/reviews", ReviewsRoute);
    app.use("/api/auth", authRoute);
  });
};

