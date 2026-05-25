const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const userRoutes = require("./routes/userRouter");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(logger)

// serve static HTMML
app.use(express.static(path.join(__dirname, "public")));

//Root Route
app.get("/api", (req, res)=>{
    res.send("My Week 2 API!");
})

// Route

// Error Handler Middleware


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});