const express = require("express");

const { createUser, getUserProfile} = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser);

router.get("/:id", getUserProfile);