import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiUpload, FiFile, FiCheck } from 'react-icons/fi';

function BulkImportModal({ onClose }) {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert('Please select files to upload');
      return;
    }

    setUploading(true);

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploading(false);
        alert('Upload completed successfully!');
        onClose();
      }
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Bulk Import Books</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Upload Area */}
        <div className="mb-6">
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8">
            <input
              type="file"
              multiple
              accept=".pdf,.csv,.xlsx"
              onChange={handleFileSelect}
              className="hidden"
              id="bulk-files"
            />
            <label
              htmlFor="bulk-files"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <FiUpload className="w-12 h-12 text-gray-400 mb-4" />
              <span className="text-lg font-medium mb-2">
                Drop files here or click to upload
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Support for PDF books and CSV/Excel metadata files
              </span>
            </label>
          </div>
        </div>

        {/* Selected Files List */}
        {files.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Selected Files</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"
                >
                  <div className="flex items-center">
                    <FiFile className="mr-2" />
                    <span className="text-sm">{file.name}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload Progress */}
        {uploading && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Uploading...</span>
              <span className="text-sm font-medium">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-primary-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={files.length === 0 || uploading}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? (
              <>
                <FiCheck className="mr-2" /> Uploading...
              </>
            ) : (
              <>
                <FiUpload className="mr-2" /> Start Upload
              </>
            )}
          </button>
        </div>

        {/* Import Guidelines */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Import Guidelines:</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
            <li>Upload PDF files for books</li>
            <li>Use CSV/Excel file for bulk metadata import</li>
            <li>Maximum file size: 50MB per file</li>
            <li>Supported formats: PDF, CSV, XLSX</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BulkImportModal;
