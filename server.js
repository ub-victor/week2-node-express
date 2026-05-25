const express = require("express");
const dotenv = require("dotenv");
const path = require("path");


dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// serve static HTMML
app.use(express.static(path.join(__dirname, "public")))