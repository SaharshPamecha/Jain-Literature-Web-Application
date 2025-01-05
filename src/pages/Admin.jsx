import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiBook, FiGrid, FiUsers, FiSettings, FiFileText, FiMenu, FiX, FiBell, FiUser } from 'react-icons/fi';
import Dashboard from './Admin/Dashboard';
import LibraryManagement from './Admin/LibraryManagement';
import CategoryManagement from './Admin/CategoryManagement';
import ContentManagement from './Admin/ContentManagement';
import UserManagement from './Admin/UserManagement';
import Settings from './Admin/Settings';
import useAdminStore from '../stores/adminStore';
import '../styles/admin.css';

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { recentActivities } = useAdminStore();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setSidebarOpen(width >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on mobile when navigating
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [location, isMobile]);

  const menuItems = [
    { path: '/admin', icon: <FiHome size={20} />, label: 'Dashboard' },
    { path: '/admin/library', icon: <FiBook size={20} />, label: 'Library Management' },
    { path: '/admin/categories', icon: <FiGrid size={20} />, label: 'Categories' },
    { path: '/admin/content', icon: <FiFileText size={20} />, label: 'Content Management' },
    { path: '/admin/users', icon: <FiUsers size={20} />, label: 'Users' },
    { path: '/admin/settings', icon: <FiSettings size={20} />, label: 'Settings' }
  ];

  const getPageTitle = () => {
    const currentPath = location.pathname;
    const menuItem = menuItems.find(item => item.path === currentPath);
    return menuItem ? menuItem.label : 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Overlay for mobile */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Admin Header */}
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm z-30">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <h1 className="text-xl font-bold text-primary-600">{getPageTitle()}</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <FiBell size={20} />
            </button>
            <div className="flex items-center gap-2">
              <FiUser size={20} />
              <span className="hidden md:inline">Admin</span>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Layout */}
      <div className="pt-16 flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-20 w-64 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          } bg-white dark:bg-gray-800 shadow-lg lg:shadow-none transition-transform duration-300 ease-in-out h-full`}
        >
          <div className="flex flex-col h-full">
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto sidebar-scrollbar">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out ${
                    location.pathname === item.path
                      ? 'bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => isMobile && setSidebarOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Recent Activity Feed */}
            <div className="px-4 py-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-3 overflow-y-auto max-h-48 sidebar-scrollbar">
                {recentActivities.slice(0, 5).map((activity, index) => (
                  <div
                    key={index}
                    className="text-sm border-l-2 border-primary-500 pl-3 py-2 activity-feed-item"
                  >
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      {activity.item}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6`}>
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="library" element={<LibraryManagement />} />
              <Route path="categories" element={<CategoryManagement />} />
              <Route path="content" element={<ContentManagement />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
