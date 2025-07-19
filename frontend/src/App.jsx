import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Import the hook

// --- Import Components ---
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CoursesLayout from "./pages/CoursesLayout";
import MyLibrary from "./pages/MyLibrary";

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
          <Route path="outline" element={<ProgramOutline />} />
          <Route path="requirements" element={<CompletionRequirements />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;