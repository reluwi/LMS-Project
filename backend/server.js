const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const port = process.env.PORT || 5000;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the course routes
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));