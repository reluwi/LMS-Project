import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Import the hook

// --- Import Components ---
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CoursesLayout from "./pages/CoursesLayout";
import MyLibrary from "./pages/MyLibrary";
import Modules from "./pages/Modules";
import FundamentalsOfCyber from "./pages/FundamentalsOfCyber";
import FOCModule1Lesson1 from "./pages/lessons/FOCModule1Lesson1";
import FOCModule1Lesson2 from "./pages/lessons/FOCModule1Lesson2";

// --- Placeholder Page Components ---
const ProgramIntroduction = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Program Introduction</h1>
  </div>
);
const Assignments = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Assignments</h1>
  </div>
);
const ProgramOutline = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Program Outline</h1>
  </div>
);
const CompletionRequirements = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Completion Requirements</h1>
  </div>
);

function App() {
  const { user } = useAuth(); // Get user state from the context

  return (
    <Routes>
      {/* Public Login Route */}
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" />}
      />

      {/* Main Protected Routes */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Navigate to="/" />} />

        {/* Courses Layout with all its nested children routes */}
        <Route path="courses" element={<CoursesLayout />}>
          <Route index element={<Navigate to="my-library" replace />} />
          <Route path="my-library" element={<MyLibrary />} />
          
          {/* --- Other Course Routes Added Here --- */}
          <Route path="introduction" element={<ProgramIntroduction />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="modules" element={<Modules />} />
          {/* --- Course: Fundamentals of Cybersecurity --- */}
          <Route path="modules/fundamentals" element={<FundamentalsOfCyber />} />
          <Route path="modules/fundamentals/lesson1" element={<FOCModule1Lesson1 />} />
          <Route path="modules/fundamentals/lesson2" element={<FOCModule1Lesson2 />} />

          <Route path="outline" element={<ProgramOutline />} />
          <Route path="requirements" element={<CompletionRequirements />} />

        </Route>
      </Route>
    </Routes>
  );
}

export default App;