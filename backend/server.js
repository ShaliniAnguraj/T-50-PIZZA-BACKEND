const express = require("express");
const mongoose = require("mongoose")
const morgan = require("morgan");
const dotenv = require("dotenv");
require("colors")

const connectDB = require("./config/config.js");
const Pizza = require("./models/pizzaModel.js")
//config dotenv
dotenv.config();

const app = express();
app.use(express.json());
const pizzasRoute = require("./routes/pizzasRoute.js")

//routes
app.use("/api/pizzas/", pizzasRoute)


const port = process.env.PORT || 5000;

connectDB().then(() => {
    app.get("/", (req, res) => {
        res.send("<h1>Hello From Node Server vai nodemon</h1>");
    });
    try {
        app.listen(port, () => {
            console.log(`Server Running on ${process.env.NODE_ENV} on port no ${process.env.PORT}`.bgGreen.blue);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})