import { NavLink } from "react-router-dom";
import { Bell, User } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const getNavLinkClasses = ({ isActive }) =>
    `rounded-full flex-1 text-center text-sm font-medium py-1.5 transition-colors duration-200 ${
      isActive
        ? "bg-slate-800 text-white shadow-inner"
        : "text-gray-600 hover:text-black"
    }`;

  return (
    <nav className="bg-white shadow-sm border-b px-6 py-3">
      <div className="flex items-center justify-between">
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

        <div className="flex items-center space-x-4">
          <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          <div className="bg-slate-800 rounded-full p-2">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
