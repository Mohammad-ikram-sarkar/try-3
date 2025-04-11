import React, { useState, useEffect } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const LightDarkToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Update the document body class based on darkMode state.
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Update darkMode state when the checkbox changes.
  const handleToggle = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <div className="relative">
    {/* Hidden checkbox to control the toggle */}
    <input
      type="checkbox"
      id="checkbox"
      checked={darkMode}
      onChange={handleToggle}
      className="hidden"
    />

    {/* Toggle label styled as a switch */}
    <label
      htmlFor="checkbox"
      className="flex items-center justify-between w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer relative"
    >
      {/* Left icon: Dark mode icon */}
      <MdDarkMode className="text-white" size={20} />
      {/* Right icon: Light mode icon */}
      <MdLightMode className="text-yellow-500" size={20} />

      {/* The sliding ball (knob) */}
      <span
        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transition-transform transform ${
          darkMode ? 'translate-x-8' : ''
        }`}
      ></span>
    </label>
  </div>
  );
};

export default LightDarkToggle;
