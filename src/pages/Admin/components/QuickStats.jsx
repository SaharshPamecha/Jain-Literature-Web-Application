import React from 'react';
import { motion } from 'framer-motion';

const QuickStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="text-primary-600 dark:text-primary-400">
              {stat.icon}
            </div>
            <span className={`text-sm font-medium ${
              stat.change.startsWith('+') 
                ? 'text-green-600 dark:text-green-400'
                : 'text-red-600 dark:text-red-400'
            }`}>
              {stat.change}
            </span>
          </div>
          <h3 className="text-3xl font-bold mt-4 mb-1">{stat.value}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default QuickStats;
