import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Categories = () => {
  const { t } = useTranslation();

  const categories = [
    {
      id: 'scripture',
      title: t('categories.scripture'),
      description: t('categories.scriptureDesc'),
      image: '/images/categories/scripture.jpg',
      count: 45
    },
    {
      id: 'philosophy',
      title: t('categories.philosophy'),
      description: t('categories.philosophyDesc'),
      image: '/images/categories/philosophy.jpg',
      count: 32
    },
    {
      id: 'history',
      title: t('categories.history'),
      description: t('categories.historyDesc'),
      image: '/images/categories/history.jpg',
      count: 28
    },
    {
      id: 'commentary',
      title: t('categories.commentary'),
      description: t('categories.commentaryDesc'),
      image: '/images/categories/commentary.jpg',
      count: 51
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t('categories.title')}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={category.image}
                    alt={category.title}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">{category.title}</h2>
                    <span className="text-primary-600 dark:text-primary-400">
                      {category.count} {t('categories.books')}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                  <button
                    onClick={() => window.location.href = `/library?category=${category.id}`}
                    className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                  >
                    {t('categories.explore')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
