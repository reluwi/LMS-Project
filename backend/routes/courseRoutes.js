const express = require('express');
const router = express.Router();
const { getCourses, setCourse } = require('../controllers/courseController');

// Route for getting all courses
router.get('/', getCourses);

// Route for creating a new course
router.post('/', setCourse);

module.exports = router;