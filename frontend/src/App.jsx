import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Import your main components and new page layouts
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CoursesLayout from "./pages/CoursesLayout";

// --- Import your new placeholder pages ---
import MyLibrary from "./pages/MyLibrary";

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
const Modules = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Modules</h1>
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
  return (
    // This main div wraps your entire application
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        {/* Route 1: The Dashboard Page */}
        {/* When the URL is "/", it will render the Dashboard page component */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Navigate to="/" />} />

        {/* Route 2: The Courses Layout (with nested pages) */}
        {/* When the URL starts with "/courses", it will render the CoursesLayout component. */}
        {/* This layout contains the sidebar and an <Outlet> for its child pages. */}
        <Route path="/courses" element={<CoursesLayout />}>
          {/* This is the default child for "/courses". It redirects to "my-library" */}
          <Route index element={<Navigate to="my-library" replace />} />

          {/* These are the nested routes. They render inside CoursesLayout's <Outlet> */}
          <Route path="my-library" element={<MyLibrary />} />
          <Route path="introduction" element={<ProgramIntroduction />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="modules" element={<Modules />} />
          <Route path="outline" element={<ProgramOutline />} />
          <Route path="requirements" element={<CompletionRequirements />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
