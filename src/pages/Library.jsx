import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiFilter } from 'react-icons/fi';

const Library = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const books = [
    {
      id: 1,
      title: "Tattvartha Sutra",
      author: "Acharya Umasvati",
      category: "scripture",
      language: "sanskrit",
      coverImage: "/images/books/tattvartha-sutra.jpg",
      description: "A foundational text of Jainism explaining the nature of reality and the path to liberation."
    },
    {
      id: 2,
      title: "Samayasāra",
      author: "Acharya Kundakunda",
      category: "philosophy",
      language: "prakrit",
      coverImage: "/images/books/samayasara.jpg",
      description: "A profound philosophical text exploring the nature of the soul and its journey to moksha."
    },
    {
      id: 3,
      title: "Dravyasaṃgraha",
      author: "Acharya Nemichandra",
      category: "philosophy",
      language: "prakrit",
      coverImage: "/images/books/dravyasamgraha.jpg",
      description: "A comprehensive overview of the six fundamental substances in Jain metaphysics."
    }
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || book.language === selectedLanguage;
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t('library.searchPlaceholder')}
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="all">{t('library.allCategories')}</option>
                <option value="scripture">{t('library.scripture')}</option>
                <option value="philosophy">{t('library.philosophy')}</option>
              </select>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="all">{t('library.allLanguages')}</option>
                <option value="sanskrit">{t('library.sanskrit')}</option>
                <option value="prakrit">{t('library.prakrit')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {t('library.by')} {book.author}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {book.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    {t(`library.${book.category}`)}
                  </span>
                  <button
                    onClick={() => window.location.href = `/read/${book.id}`}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                  >
                    {t('library.readNow')}
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

export default Library;
