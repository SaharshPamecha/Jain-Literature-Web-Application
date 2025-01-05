import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertCircle, FiInfo, FiCheckCircle } from 'react-icons/fi';

const NotificationCenter = () => {
  const notifications = [
    {
      id: 1,
      type: 'alert',
      message: 'System maintenance scheduled for tonight',
      time: '1 hour ago',
      icon: <FiAlertCircle className="text-yellow-500" />
    },
    {
      id: 2,
      type: 'info',
      message: 'New feature: Bulk book import available',
      time: '2 hours ago',
      icon: <FiInfo className="text-blue-500" />
    },
    {
      id: 3,
      type: 'success',
      message: 'Backup completed successfully',
      time: '3 hours ago',
      icon: <FiCheckCircle className="text-green-500" />
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex-shrink-0 mt-1">{notification.icon}</div>
            <div className="flex-1">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {notification.message}
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {notification.time}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCenter;
