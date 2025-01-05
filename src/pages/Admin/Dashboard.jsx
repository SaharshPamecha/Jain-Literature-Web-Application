import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiUsers, FiActivity, FiEye } from 'react-icons/fi';

const Dashboard = () => {
  const stats = [
    { title: 'Total Books', value: '156', icon: <FiBook />, change: '+12%' },
    { title: 'Active Users', value: '1.2k', icon: <FiUsers />, change: '+5%' },
    { title: 'Daily Views', value: '3.4k', icon: <FiEye />, change: '+8%' },
    { title: 'New Uploads', value: '24', icon: <FiActivity />, change: '+15%' }
  ];

  const recentActivities = [
    { type: 'upload', text: 'New book "Tattvartha Sutra" uploaded', time: '2 hours ago' },
    { type: 'edit', text: 'Updated "Samayasāra" description', time: '4 hours ago' },
    { type: 'user', text: 'New user registration', time: '5 hours ago' },
    { type: 'comment', text: 'New comment on "Dravyasaṃgraha"', time: '6 hours ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
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
              <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold mt-4 mb-1">{stat.value}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
            >
              <div className="flex items-center">
                <span className="text-gray-600 dark:text-gray-400">{activity.text}</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="p-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Add New Book
        </button>
        <button className="p-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Manage Categories
        </button>
        <button className="p-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          View Reports
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
