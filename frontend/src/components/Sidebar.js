import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { PiStudentBold } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";
import alpsLogo from '../assets/alps-logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        {<img src={alpsLogo} alt="ALPS Logo" />}
        <h3>ALPS</h3>
      </div>
      <nav>
        <ul>
          <li className="active"><a href="#dashboard"><RxDashboard /> Dashboard</a></li>
          <li><a href="#courses"><PiStudentBold /> Courses</a></li>
          <li><a href="#help"><BiHelpCircle /> Help</a></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
         {<img src={alpsLogo} alt="ALPS Logo" />}
         <p>Your preferred training and growth partner</p>
      </div>
    </div>
  );
};

export default Sidebar;