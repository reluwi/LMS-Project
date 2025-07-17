const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.get('/api/courses', (req, res) => {
    // Now sending an array of courses
    res.status(200).json([
        {
            _id: 1, // Databases often use _id
            title: 'Online Course Management Systems',
            duration: '1 hour duration'
        }
    ]);
});

app.listen(port, () => console.log(`Server started on port ${port}`));