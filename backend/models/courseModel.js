const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
  {
    // We'll link this to a user later, for now it's simple
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    title: {
      type: String,
      required: [true, 'Please add a title for the course'],
    },
    duration: {
      type: String,
      required: [true, 'Please add a duration'],
    },
  },
  {
    timestamps: true, // This automatically adds `createdAt` and `updatedAt` fields
  }
);

module.exports = mongoose.model('Course', courseSchema);