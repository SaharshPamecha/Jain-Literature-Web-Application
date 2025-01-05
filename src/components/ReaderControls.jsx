import React from 'react';
import { FiMinus, FiPlus, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const ReaderControls = ({ fontSize, onFontSizeChange }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-end space-x-4 mb-4">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onFontSizeChange(fontSize - 1)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <FiMinus />
        </button>
        <span>{fontSize}px</span>
        <button
          onClick={() => onFontSizeChange(fontSize + 1)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <FiPlus />
        </button>
      </div>
      
      <button
        onClick={toggleTheme}
        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
};

export default ReaderControls;
