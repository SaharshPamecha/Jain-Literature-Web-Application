import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const books = [
  {
    id: 1,
    title: 'Tattvartha Sutra',
    author: 'Acharya Umasvati',
    cover: '/covers/tattvartha-sutra.jpg',
    description: 'A foundational text of Jainism explaining the nature of reality and the path to liberation.',
    language: 'Sanskrit/English'
  },
  {
    id: 2,
    title: 'Samayasāra',
    author: 'Acharya Kundakunda',
    cover: '/covers/samayasara.jpg',
    description: 'A profound philosophical text exploring the nature of the soul and its journey to moksha.',
    language: 'Prakrit/English'
  },
  {
    id: 3,
    title: 'Dravyasaṃgraha',
    author: 'Acharya Nemichandra',
    cover: '/covers/dravyasamgraha.jpg',
    description: 'A comprehensive overview of the six fundamental substances in Jain metaphysics.',
    language: 'Prakrit/English'
  }
];

const FeaturedBooks = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-800 dark:text-primary-200"
        >
          {t('featured.title')}
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {books.map((book) => (
            <motion.div
              key={book.id}
              variants={item}
              className="book-card"
            >
              <div className="aspect-w-3 aspect-h-4 mb-4">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{book.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {t('by')} {book.author}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                {book.language}
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {book.description}
              </p>
              <Link
                to={`/read/${book.id}`}
                className="btn-primary inline-block"
              >
                {t('readNow')}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
