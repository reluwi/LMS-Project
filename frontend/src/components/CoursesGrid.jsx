import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';
import { Grid, List } from 'lucide-react';

function CoursesGrid() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses');
        
        // --- THE FIX IS HERE ---
        // Defensively check if the response data is an array.
        if (Array.isArray(response.data)) {
          setCourses(response.data);
        } else {
          // If it's not an array, log the unexpected response and set courses to an empty array.
          console.error("Data received from API is not an array:", response.data);
          setCourses([]); // This prevents the .map() crash.
        }

      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]); // Also set to empty array on fetch error.
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []); // The empty array [] means this effect runs once on mount

  if (loading) {
    return <div className="text-center p-8">Loading courses...</div>;
  }

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <div className="flex justify-end items-center mb-6 space-x-2">
        <Grid className="h-6 w-6 text-gray-400 cursor-pointer" />
        <List className="h-6 w-6 text-gray-600 cursor-pointer" />
      </div>
      
      {/* This will now be safe because `courses` is guaranteed to be an array */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            code={course.code}
            description={course.description}
            progress={course.progress}
          />
        ))}
      </div>
    </main>
  );
}

export default CoursesGrid;