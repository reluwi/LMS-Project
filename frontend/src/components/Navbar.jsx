import { NavLink } from "react-router-dom";
import { Bell, User, LogOut } from "lucide-react"; // Import the LogOut icon
import logo from "../assets/logo.png";

// --- Step 1: Accept the onLogout function as a prop ---
function Navbar({ onLogout }) {
  const getNavLinkClasses = ({ isActive }) =>
    `rounded-full flex-1 text-center text-sm font-medium py-1.5 transition-colors duration-200 ${
      isActive
        ? "bg-slate-800 text-white shadow-inner"
        : "text-gray-600 hover:text-black"
    }`;

  return (
    <nav className="bg-white shadow-sm border-b px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left side of Navbar (no changes here) */}
        <div className="flex items-center space-x-6">
          <img src={logo} alt="ALPS Logo" className="h-8 w-auto" />
          <div className="bg-gray-100 rounded-full p-1 w-64 flex">
            <NavLink to="/" className={getNavLinkClasses} end>
              Dashboard
            </NavLink>
            <NavLink to="/courses" className={getNavLinkClasses}>
              Courses
            </NavLink>
          </div>
        </div>

        {/* Right side of Navbar */}
        <div className="flex items-center space-x-4">
          <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          <div className="bg-slate-800 rounded-full p-2">
            <User className="h-5 w-5 text-white" />
          </div>

          {/* --- Step 2: Add a styled Logout button --- */}
          {/* This button calls the onLogout function when clicked */}
          <button 
            onClick={onLogout} 
            className="flex items-center justify-center p-2 rounded-full text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
            title="Logout"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;