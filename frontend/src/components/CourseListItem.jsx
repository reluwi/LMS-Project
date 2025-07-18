import React from 'react';
import { Lightbulb } from 'lucide-react'; // Placeholder icon

function CourseListItem({ title, progress }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between space-x-4">
      {/* Left side: Icon and Text */}
      <div className="flex items-center space-x-4 flex-grow">
        {/* Icon */}
        <div className="bg-yellow-100 rounded-full p-3">
          <Lightbulb className="h-6 w-6 text-yellow-500" />
        </div>
        
        {/* Course Info */}
        <div className="flex-grow">
          <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">LEARN</p>
          <h3 className="text-md font-semibold text-gray-800 mt-1">{title}</h3>
          
          {/* Progress Bar */}
          <div className="flex items-center mt-2 space-x-3">
            <div className="w-full max-w-xs bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#8B0000] h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-xs font-semibold text-gray-500">{progress}%</span>
          </div>
        </div>
      </div>
      
      {/* Right side: Button */}
      <div className="flex-shrink-0">
        <button className="bg-[#8B0000] text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-900 transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
}

export default CourseListItem;