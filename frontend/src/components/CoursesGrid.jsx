import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard'; // For the Grid View
import CourseListItem from './CourseListItem'; // For the List View
import { Grid, List } from 'lucide-react';

function CoursesGrid() {
  // --- 1. STATE MANAGEMENT ---
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('grid'); // New state: 'grid' or 'list'

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses');
        if (Array.isArray(response.data)) {
          setCourses(response.data);
        } else {
          console.error("Data received from API is not an array:", response.data);
          setCourses([]);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading courses...</div>;
  }

  // --- 2. RENDER LOGIC ---
  return (
    <main className="p-4 sm:p-6 lg:p-8">
      {/* View Toggle Buttons */}
      <div className="flex justify-end items-center mb-6 space-x-2">
        <Grid 
          className={`h-6 w-6 cursor-pointer ${view === 'grid' ? 'text-gray-800' : 'text-gray-400'}`}
          onClick={() => setView('grid')} // Set view to 'grid'
        />
        <List 
          className={`h-6 w-6 cursor-pointer ${view === 'list' ? 'text-gray-800' : 'text-gray-400'}`}
          onClick={() => setView('list')} // Set view to 'list'
        />
      </div>
      
      {/* --- 3. CONDITIONAL RENDERING --- */}
      {/* Render based on the 'view' state */}
      <div>
        {view === 'grid' ? (
          // GRID VIEW
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
        ) : (
          // LIST VIEW
          <div className="space-y-4">
            {courses.map((course) => (
              <CourseListItem
                key={course._id}
                title={course.code} // Using 'code' field for the title
                progress={course.progress}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default CoursesGrid;