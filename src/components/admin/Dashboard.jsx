import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUpload, FiList, FiUsers, FiSettings } from 'react-icons/fi';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Books', value: '156' },
    { label: 'Languages', value: '3' },
    { label: 'Categories', value: '12' },
    { label: 'Active Users', value: '1.2k' }
  ];

  const actions = [
    {
      title: 'Upload New Book',
      icon: <FiUpload className="w-6 h-6" />,
      link: '/admin/upload',
      description: 'Add new books to the library'
    },
    {
      title: 'Manage Books',
      icon: <FiList className="w-6 h-6" />,
      link: '/admin/books',
      description: 'Edit or remove existing books'
    },
    {
      title: 'User Management',
      icon: <FiUsers className="w-6 h-6" />,
      link: '/admin/users',
      description: 'Manage user access and roles'
    },
    {
      title: 'Settings',
      icon: <FiSettings className="w-6 h-6" />,
      link: '/admin/settings',
      description: 'Configure system settings'
    }
  ];

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your digital library content and settings
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              {stat.label}
            </h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Link
              to={action.link}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-primary-600 mb-4">{action.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {action.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
