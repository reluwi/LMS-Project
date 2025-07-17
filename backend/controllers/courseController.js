const Course = require('../models/courseModel');

// @desc    Get courses
// @route   GET /api/courses
// @access  Private (for now, we'll make it public for testing)
const getCourses = async (req, res) => {
  const courses = await Course.find(); // Fetches all courses from the database
  res.status(200).json(courses);
};

// @desc    Set course
// @route   POST /api/courses
// @access  Private
const setCourse = async (req, res) => {
  if (!req.body.title || !req.body.duration) {
    res.status(400);
    throw new Error('Please add a title and duration');
  }

  const course = await Course.create({
    title: req.body.title,
    duration: req.body.duration,
  });

  res.status(201).json(course); // 201 means something was created
};

module.exports = {
  getCourses,
  setCourse,
};