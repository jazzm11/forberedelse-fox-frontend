// Dependencies
const express = require('express');
const path = require("path");

// App Settings
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Route Imports
const foxRouter = require("./routes/foxRouter");

// Routes
app.use(foxRouter);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});