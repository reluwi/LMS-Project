import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './module.css';


const FundamentalsOfCyber = () => {
  const [activeModules, setActiveModules] = useState([]);


  const modules = [
    {
      title: 'Module 1: Introduction to Cybersecurity',
      lessons: [
        { title: 'Lesson 1: What is Cybersecurity?', link: '/courses/modules/fundamentals/lesson1' },
        { title: 'Lesson 2: Why It Matters', link: '/courses/modules/fundamentals/lesson2' },
      ],
    },
    {
      title: 'Module 2: Understanding IP Address, DNS, and Ports',
      lessons: [
        { title: 'Lesson 1: What is an IP Address?', link: '#' },
        { title: 'Lesson 2: DNS Basics', link: '#' },
        { title: 'Lesson 3: What Are Network Ports?', link: '#' },
      ],
    },
    {
      title: 'Module 3: Network Security Basics',
      lessons: [
        { title: 'Lesson 1: Firewalls and Antivirus', link: '#' },
        { title: 'Lesson 2: VPN and Secure Connections', link: '#' },
      ],
    },
    {
      title: 'Module 4: Cybersecurity Best Practices',
      lessons: [
        { title: 'Lesson 1: Staying Safe Online', link: '#' },
      ],
    },
  ];


  useEffect(() => {
    setActiveModules(modules.map((_, i) => i)); 
  }, []);


  const isExpanded = (index) => activeModules.includes(index);


  const toggleModule = (index) => {
    setActiveModules((prev) =>
      isExpanded(index)
        ? prev.filter((i) => i !== index) // collapse
        : [...prev, index] // expand
    );
  };


  const toggleAllModules = () => {
    if (activeModules.length === modules.length) {
      setActiveModules([]);
    } else {
      setActiveModules(modules.map((_, i) => i));
    }
  };


  return (
    <div className="modules-page">
      <h3>CODE 010</h3>
      <h1><b>Fundamentals of Cybersecurity</b></h1>


      <button className="expand-collapse-btn" onClick={toggleAllModules}>
        {activeModules.length === modules.length ? 'Collapse All' : 'Expand All'}
      </button>


      {modules.map((module, index) => (
        <div key={index} className={`module ${isExpanded(index) ? 'active' : ''}`}>
          <div className="module-header" onClick={() => toggleModule(index)}>
            {module.title}
          </div>
          <div className="lessons">
            {module.lessons.map((lesson, idx) => (
              <div key={idx} className="lesson">
                <Link to={lesson.link}>{lesson.title}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


export default FundamentalsOfCyber;



