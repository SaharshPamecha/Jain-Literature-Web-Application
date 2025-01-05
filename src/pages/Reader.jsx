import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiBookmark, FiEdit } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import BookViewer from '../components/Reader/BookViewer';
import { useTheme } from '../hooks/useTheme';

const Reader = () => {
  const { bookId } = useParams();
  const { t } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setBookData({
        id: bookId,
        title: "Tattvartha Sutra",
        author: "Acharya Umasvati",
        pdfUrl: "/books/tattvartha-sutra.pdf"
      });
      setIsLoading(false);
    }, 1000);
  }, [bookId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl"
        >
          {t('reader.loading')}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">{bookData.title}</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Add bookmark"
              >
                <FiBookmark />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Add annotation"
              >
                <FiEdit />
              </button>
            </div>
          </div>
          
          <BookViewer bookData={bookData} />
        </div>
      </motion.div>
    </div>
  );
};

export default Reader;
