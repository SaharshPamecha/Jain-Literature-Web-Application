import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiUpload } from 'react-icons/fi';

const BookUpload = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    language: 'en',
    category: '',
    file: null
  });
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    // Create FormData object
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/books/upload', {
        method: 'POST',
        body: data
      });

      if (response.ok) {
        // Handle success
        alert('Book uploaded successfully!');
        setFormData({
          title: '',
          author: '',
          description: '',
          language: 'en',
          category: '',
          file: null
        });
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      alert('Error uploading book: ' + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">{t('admin.uploadBook')}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">{t('admin.bookTitle')}</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>

        <div>
          <label className="block mb-2">{t('admin.author')}</label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>

        <div>
          <label className="block mb-2">{t('admin.description')}</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            rows="4"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">{t('admin.language')}</label>
            <select
              value={formData.language}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="gu">Gujarati</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">{t('admin.category')}</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            >
              <option value="">Select Category</option>
              <option value="philosophy">Philosophy</option>
              <option value="scripture">Scripture</option>
              <option value="commentary">Commentary</option>
              <option value="history">History</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2">{t('admin.bookFile')}</label>
          <div className="border-2 border-dashed rounded-lg p-4 text-center">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
              className="hidden"
              id="book-file"
              required
            />
            <label
              htmlFor="book-file"
              className="cursor-pointer flex flex-col items-center"
            >
              <FiUpload className="w-8 h-8 mb-2" />
              <span>{t('admin.dragDrop')}</span>
              <span className="text-sm text-gray-500">
                {formData.file ? formData.file.name : t('admin.selectFile')}
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isUploading}
          className="w-full py-2 px-4 bg-primary-600 text-white rounded hover:bg-primary-700 disabled:opacity-50"
        >
          {isUploading ? t('admin.uploading') : t('admin.upload')}
        </button>
      </form>
    </motion.div>
  );
};

export default BookUpload;
