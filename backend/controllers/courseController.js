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

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private
const updateCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  // Note: We can add logic here to check if the logged-in user owns the course
  // if (course.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error('User not authorized');
  // }

  const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedCourse);
};

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private
const deleteCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  // Note: We can add logic here to check if the logged-in user owns the course
  // if (course.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error('User not authorized');
  // }
  
  await course.deleteOne();

  res.status(200).json({ id: req.params.id, message: 'Course removed' });
};

module.exports = {
  getCourses,
  setCourse,
  updateCourse,
  deleteCourse,  
};