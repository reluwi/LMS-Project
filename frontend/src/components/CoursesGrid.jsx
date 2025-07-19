import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // <-- Step 1: Import the useAuth hook

// Import your view components
import CourseCard from './CourseCard';
import CourseListItem from './CourseListItem';
import { Grid, List } from 'lucide-react';

function CoursesGrid() {
  // --- Step 2: Get the token from the AuthContext ---
  const { token } = useAuth();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('grid');

  // --- Step 3: Update the useEffect hook ---
  useEffect(() => {
    // Only try to fetch courses if a token exists
    if (token) {
      const fetchCourses = async () => {
        try {
          // Create the configuration object with the Authorization header
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          // Pass the config object with the token to your axios request
          const response = await axios.get('/api/courses', config);

          if (Array.isArray(response.data)) {
            setCourses(response.data);
          } else {
            console.error("Data received from API is not an array:", response.data);
            setCourses([]);
          }
        } catch (error) {
          console.error("Error fetching courses:", error);
          // This error is likely a 401 Unauthorized if the token is invalid
          setCourses([]);
        } finally {
          setLoading(false);
        }
      };

      fetchCourses();
    } else {
      // If there's no token, don't bother trying to fetch.
      setLoading(false);
      setCourses([]);
    }
  }, [token]); // --- Step 4: Add token as a dependency ---
             // This ensures the effect re-runs if the user logs in or out.

  if (loading) {
    return <div className="text-center p-8">Loading courses...</div>;
  }

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      {/* View Toggle Buttons */}
      <div className="flex justify-end items-center mb-6 space-x-2">
        <Grid 
          className={`h-6 w-6 cursor-pointer ${view === 'grid' ? 'text-gray-800' : 'text-gray-400'}`}
          onClick={() => setView('grid')}
        />
        <List 
          className={`h-6 w-6 cursor-pointer ${view === 'list' ? 'text-gray-800' : 'text-gray-400'}`}
          onClick={() => setView('list')}
        />
      </div>
      
      {/* Conditional Rendering */}
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
                title={course.code}
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