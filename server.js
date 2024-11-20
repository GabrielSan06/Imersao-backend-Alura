// Import the Express
import express from "express";

// Defining o express em uma const to use
const app = express();
// 3000 = port
app.listen(3000, () => {
    console.log("Server listening...");
});

// Make a route
app.get("/api", (req, res) => {
    // send a response from status 200
    res.status(200).send("Welcome to immersion!");
});