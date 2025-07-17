const express = require('express');
const router = express.Router();

const { getCourses, 
        setCourse, 
        updateCourse, 
        deleteCourse, 
} = require('../controllers/courseController');

const { protect } = require('../middleware/authMiddleware');

// GET is public, anyone can see courses
// POST requires a token (you must be logged in to create a course)
router.route('/').get(getCourses).post(protect, setCourse);

// PUT and DELETE require a token
router.route('/:id').delete(protect, deleteCourse).put(protect, updateCourse);

module.exports = router;