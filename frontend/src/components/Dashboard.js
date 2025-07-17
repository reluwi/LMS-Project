import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import CourseCard from './CourseCard';
import { FaUserCircle } from 'react-icons/fa';

const Dashboard = () => {

  const [courses, setCourses] = useState([]); // State to hold course data

  useEffect(() => {
    // This function will run when the component mounts
    const fetchCourses = async () => {
      try {
        // Because of the proxy, we can just use a relative path
        const response = await fetch('/api/courses');
        const data = await response.json();
        setCourses(data); // Update state with fetched data
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
  }, []); // The empty array ensures this runs only once

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <header>
          <h1>Hello, [user]!</h1>
          <div className="user-profile">
            <FaUserCircle size={30} />
          </div>
        </header>
        <section className="courses-section">
          {courses.length > 0 ? (
            // Map over the courses array and render a card for each
            courses.map(course => (
              <CourseCard key={course._id} course={course} />
            ))
          ) : (
            <p>No Courses Available Yet</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;