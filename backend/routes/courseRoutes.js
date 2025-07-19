const express = require('express');
const router = express.Router();

const { getCourses, 
        setCourse, 
        updateCourse, 
        deleteCourse, 
} = require('../controllers/courseController');

const { protect } = require('../middleware/authMiddleware');

// ALL course routes should be protected.
router.route('/').get(protect, getCourses).post(protect, setCourse);
router.route('/:id').delete(protect, deleteCourse).put(protect, updateCourse);

module.exports = router;