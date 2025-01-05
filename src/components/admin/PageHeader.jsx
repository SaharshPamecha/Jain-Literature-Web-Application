import React from 'react';
import Breadcrumb from './Breadcrumb';

const PageHeader = ({ title, children }) => {
  return (
    <div className="mb-8">
      <Breadcrumb />
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <div className="flex items-center space-x-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
