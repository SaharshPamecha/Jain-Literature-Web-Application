import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import authService from '../auth/auth';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = authService.isAuthenticated();
  const user = authService.getCurrentUser();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
              Jain Library
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/library" className="nav-link">
              {t('nav.library')}
            </Link>
            <Link to="/categories" className="nav-link">
              {t('nav.categories')}
            </Link>
            <Link to="/about" className="nav-link">
              {t('nav.about')}
            </Link>
            
            <LanguageSelector />
            <ThemeToggle />

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/admin" className="flex items-center space-x-2">
                  <span className="text-sm">{user?.username}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn-primary text-sm px-4 py-2"
                >
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="btn-primary text-sm px-4 py-2"
              >
                {t('nav.login')}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <Link to="/library" className="block nav-link">
              {t('nav.library')}
            </Link>
            <Link to="/categories" className="block nav-link">
              {t('nav.categories')}
            </Link>
            <Link to="/about" className="block nav-link">
              {t('nav.about')}
            </Link>
            
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <ThemeToggle />
            </div>

            {isAuthenticated ? (
              <div className="space-y-2">
                <Link to="/admin" className="block nav-link">
                  {t('nav.admin')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn-primary w-full text-sm"
                >
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="btn-primary w-full text-sm"
              >
                {t('nav.login')}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
