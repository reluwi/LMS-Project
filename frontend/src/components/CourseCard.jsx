import React from 'react';
import cardBanner from '../assets/card-banner.png'; 

function CourseCard({ code, description, progress }) {
  return (
    // The main container styles are unchanged
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg p-4">
      
      <img className="w-full h-auto object-cover" src={cardBanner} alt="Course banner" />
      
      <div className="p-6"> 
        <p className="text-xs text-gray-500 font-medium">{code}</p>
        <p className="text-sm text-gray-600 mt-2 leading-normal"> 
          {description}
        </p>

        <div className="flex items-center mt-4 space-x-2"> 
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#8B0000] h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs font-semibold text-gray-500">{progress}%</span> 
        </div>
      </div>
    </div>
  );
}

export default CourseCard;