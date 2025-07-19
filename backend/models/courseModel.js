const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // This tells Mongoose which model the ObjectId refers to.
    },
    code: {
      type: String,
      required: [true, 'Please add a course code'], // e.g., "CODE 020 | Presentation Skills"
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    progress: {
      type: Number,
      required: true,
      default: 0, // A new course starts with 0 progress
    },
    // We can add bannerImageURL, etc. later
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Course', courseSchema);