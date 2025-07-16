import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-icon">
        <FaLightbulb />
      </div>
      <div className="course-details">
        <span>LEARN</span>
        <h3>{course.title}</h3>
        <p>{course.duration}</p>
      </div>
      <button className="continue-button">Continue</button>
    </div>
  );
};

export default CourseCard;