import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FeaturedBooks from '../components/FeaturedBooks';
import { FiBook, FiGlobe, FiMoon, FiBookmark } from 'react-icons/fi';

const Landing = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FiBook className="w-6 h-6" />,
      title: t('features.digitalLibrary'),
      description: t('features.digitalLibraryDesc')
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: t('features.multiLanguage'),
      description: t('features.multiLanguageDesc')
    },
    {
      icon: <FiMoon className="w-6 h-6" />,
      title: t('features.readingModes'),
      description: t('features.readingModesDesc')
    },
    {
      icon: <FiBookmark className="w-6 h-6" />,
      title: t('features.personalNotes'),
      description: t('features.personalNotesDesc')
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('landing.title')}
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              {t('landing.subtitle')}
            </p>
            <Link
              to="/library"
              className="btn-primary bg-white text-primary-900 hover:bg-gray-100"
            >
              {t('landing.exploreButton')}
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            {t('features.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="inline-block p-3 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <FeaturedBooks />
    </div>
  );
};

export default Landing;
