import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMinus, FiPlus, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const BookViewer = ({ bookData }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const containerRef = useRef(null);

  const handlePageTurn = (direction) => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage(prev => direction === 'next' ? prev + 2 : prev - 2);
      setIsFlipping(false);
    }, 500);
  };

  const handleZoom = (delta) => {
    setScale(prev => Math.min(Math.max(0.5, prev + delta), 2));
  };

  return (
    <div className="relative">
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => handleZoom(-0.1)}
          className="px-4 py-2 bg-white dark:bg-gray-800 rounded shadow hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <FiMinus />
        </button>
        <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded shadow">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={() => handleZoom(0.1)}
          className="px-4 py-2 bg-white dark:bg-gray-800 rounded shadow hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <FiPlus />
        </button>
      </div>

      <div 
        ref={containerRef}
        className="relative flex justify-center items-center bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
        style={{ height: '80vh' }}
      >
        <button
          onClick={() => handlePageTurn('prev')}
          disabled={currentPage <= 1}
          className="absolute left-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50"
        >
          <FiChevronLeft size={24} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, rotateY: isFlipping ? -90 : 0 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.5 }}
            className="flex"
            style={{ 
              transform: `scale(${scale})`,
              transformOrigin: 'center center'
            }}
          >
            <div className="page-spread flex">
              {/* Left Page */}
              <div className="w-[400px] h-[600px] bg-white dark:bg-gray-800 p-8 shadow-md">
                <h3 className="text-lg font-semibold mb-4">Page {currentPage}</h3>
                <div className="prose dark:prose-invert">
                  <p>
                    सम्यग्दर्शनज्ञानचारित्राणि मोक्षमार्गः ।
                    तत्त्वार्थश्रद्धानं सम्यग्दर्शनम् ।
                  </p>
                  <p className="mt-4">
                    Right faith, right knowledge, and right conduct constitute the path to liberation.
                    The conviction in the nature of reality is right faith.
                  </p>
                </div>
              </div>

              {/* Right Page */}
              <div className="w-[400px] h-[600px] bg-white dark:bg-gray-800 p-8 shadow-md">
                <h3 className="text-lg font-semibold mb-4">Page {currentPage + 1}</h3>
                <div className="prose dark:prose-invert">
                  <p>
                    तत्त्वार्थज्ञानं सम्यग्ज्ञानम् ।
                    चारित्रं खलु धम्मो ।
                  </p>
                  <p className="mt-4">
                    The knowledge of the nature of reality is right knowledge.
                    Conduct, indeed, is righteousness.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => handlePageTurn('next')}
          className="absolute right-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      <div className="mt-4 text-center">
        {t('reader.page')} {currentPage}-{currentPage + 1}
      </div>
    </div>
  );
};

export default BookViewer;
