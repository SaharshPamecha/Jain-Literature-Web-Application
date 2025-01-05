import React from 'react';
import { motion } from 'framer-motion';

const BookContent = ({ content, fontSize }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose dark:prose-invert max-w-none"
      style={{ fontSize: `${fontSize}px` }}
    >
      {content || (
        <div className="text-center py-12">
          <p>No content available</p>
        </div>
      )}
    </motion.div>
  );
};

export default BookContent;
