import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiEdit, FiUser, FiMessageSquare } from 'react-icons/fi';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'upload',
      text: 'New book "Tattvartha Sutra" uploaded',
      time: '2 hours ago',
      icon: <FiBook />
    },
    {
      id: 2,
      type: 'edit',
      text: 'Updated "Samayasāra" description',
      time: '4 hours ago',
      icon: <FiEdit />
    },
    {
      id: 3,
      type: 'user',
      text: 'New user registration',
      time: '5 hours ago',
      icon: <FiUser />
    },
    {
      id: 4,
      type: 'comment',
      text: 'New comment on "Dravyasaṃgraha"',
      time: '6 hours ago',
      icon: <FiMessageSquare />
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
          >
            <div className="flex items-center gap-3">
              <span className="text-primary-600 dark:text-primary-400">
                {activity.icon}
              </span>
              <span className="text-gray-600 dark:text-gray-400">{activity.text}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
