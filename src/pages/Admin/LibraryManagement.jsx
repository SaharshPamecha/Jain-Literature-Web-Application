import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiUpload, FiDownload } from 'react-icons/fi';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BulkImportModal from './components/BulkImportModal';
import useAdminStore from '../../stores/adminStore';

function LibraryManagement() {
  const [showAddBook, setShowAddBook] = useState(false);
  const [showBulkImport, setShowBulkImport] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  
  const { books, addBook, updateBook, deleteBook, bulkImportBooks } = useAdminStore();

  const handleSave = (bookData) => {
    if (selectedBook) {
      updateBook(selectedBook.id, bookData);
    } else {
      addBook(bookData);
    }
    setShowAddBook(false);
    setSelectedBook(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      deleteBook(id);
    }
  };

  const handleBulkImport = (files) => {
    // Process files and import books
    const processedBooks = files.map(file => ({
      title: file.name.replace('.pdf', ''),
      status: 'processing',
      uploadDate: new Date().toISOString()
    }));
    bulkImportBooks(processedBooks);
    setShowBulkImport(false);
  };

  const handleExport = () => {
    const exportData = JSON.stringify(books, null, 2);
    const blob = new Blob([exportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'library-export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Library Management</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setShowAddBook(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
          >
            <FiPlus /> Add Book
          </button>
          <button
            onClick={() => setShowBulkImport(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
          >
            <FiUpload /> Bulk Import
          </button>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            <FiDownload /> Export
          </button>
        </div>
      </div>

      <BookList
        books={books}
        onEdit={setSelectedBook}
        onDelete={handleDelete}
      />

      {(showAddBook || selectedBook) && (
        <BookForm
          book={selectedBook}
          onClose={() => {
            setShowAddBook(false);
            setSelectedBook(null);
          }}
          onSave={handleSave}
        />
      )}

      {showBulkImport && (
        <BulkImportModal 
          onClose={() => setShowBulkImport(false)}
          onImport={handleBulkImport}
        />
      )}
    </div>
  );
}

export default LibraryManagement;
