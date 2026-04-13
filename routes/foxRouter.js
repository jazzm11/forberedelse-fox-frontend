const express = require('express');
const router = express.Router();

// Controllers
const foxController = require("../controllers/foxController");

// Routes
router.get("/", foxController.getRandomFox);
router.get("/stats", foxController.getStats);
router.post("/vote", foxController.voteFox);

module.exports = router;