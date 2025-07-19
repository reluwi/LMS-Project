import React from "react";

function MyLibrary() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CODE OIO</h1>
      <h2 className="text-4xl font-bold mb-6">Fundamentals of Cybersecurity</h2>
      <div className="flex space-x-2">
        <button className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
          Program Introduction
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">
          Programme Outline
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">
          + Completion Requirements
        </button>
      </div>
      {/* Content for the cybersecurity course will go here */}
    </div>
  );
}

export default MyLibrary;
