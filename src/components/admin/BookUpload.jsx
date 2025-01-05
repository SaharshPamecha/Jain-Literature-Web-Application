import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiX } from 'react-icons/fi';

const BookUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    language: 'en',
    category: '',
    coverImage: null,
    bookFile: null
  });

  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, coverImage: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    // Simulate upload delay
    setTimeout(() => {
      alert('Book uploaded successfully!');
      setUploading(false);
      setFormData({
        title: '',
        author: '',
        description: '',
        language: 'en',
        category: '',
        coverImage: null,
        bookFile: null
      });
      setPreview(null);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Upload New Book</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Cover Image</label>
            <div className="relative border-2 border-dashed rounded-lg p-4 text-center">
              {preview ? (
                <div className="relative">
                  <img
                    src={preview}
                    alt="Cover preview"
                    className="mx-auto max-h-48 rounded"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      setFormData({ ...formData, coverImage: null });
                    }}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full"
                  >
                    <FiX />
                  </button>
                </div>
              ) : (
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="cover-image"
                  />
                  <label
                    htmlFor="cover-image"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <FiUpload className="w-8 h-8 mb-2" />
                    <span>Upload Cover Image</span>
                    <span className="text-sm text-gray-500">
                      (JPG, PNG, GIF up to 2MB)
                    </span>
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2 border rounded focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Author</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full p-2 border rounded focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows="4"
            className="w-full p-2 border rounded focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Language</label>
            <select
              value={formData.language}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              className="w-full p-2 border rounded focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="gu">Gujarati</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full p-2 border rounded focus:ring-primary-500 focus:border-primary-500"
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
          <label className="block text-sm font-medium mb-2">Book File (PDF)</label>
          <div className="border-2 border-dashed rounded-lg p-4">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFormData({ ...formData, bookFile: e.target.files[0] })}
              className="hidden"
              id="book-file"
              required
            />
            <label
              htmlFor="book-file"
              className="cursor-pointer flex flex-col items-center"
            >
              <FiUpload className="w-8 h-8 mb-2" />
              <span>Upload PDF File</span>
              <span className="text-sm text-gray-500">
                {formData.bookFile ? formData.bookFile.name : 'Select or drag & drop'}
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="w-full py-2 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload Book'}
        </button>
      </form>
    </motion.div>
  );
};

export default BookUpload;
