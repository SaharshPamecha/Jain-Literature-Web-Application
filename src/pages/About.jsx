import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiBook, FiGlobe, FiUsers, FiHeart } from 'react-icons/fi';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FiBook className="w-8 h-8" />,
      title: t('about.digitalLibrary'),
      description: t('about.digitalLibraryDesc')
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: t('about.accessibility'),
      description: t('about.accessibilityDesc')
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: t('about.community'),
      description: t('about.communityDesc')
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: t('about.preservation'),
      description: t('about.preservationDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-4">{t('about.mission')}</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('about.missionDesc')}
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">{t('about.team')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add team members here */}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">{t('about.contact')}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t('about.contactDesc')}
          </p>
          <a
            href="mailto:contact@jainlibrary.org"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            contact@jainlibrary.org
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
