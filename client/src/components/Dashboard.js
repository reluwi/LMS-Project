import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import CourseCard from './CourseCard';
import { FaUserCircle } from 'react-icons/fa';

const Dashboard = () => {
  const [user, setUser] = useState({ name: '[user]' });
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch this data from your Node.js backend
    // For now, we will use mock data
    const fetchCourseData = () => {
      setCourse({
        title: 'Online Course Management Systems',
        duration: '1 hour duration',
      });
    };

    fetchCourseData();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <header>
          <h1>Hello, {user.name}!</h1>
          <div className="user-profile">
            <FaUserCircle size={30} />
          </div>
        </header>
        {course && <CourseCard course={course} />}
      </main>
    </div>
  );
};

export default Dashboard;