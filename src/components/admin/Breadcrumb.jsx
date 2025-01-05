import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/admin" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            Admin
          </Link>
        </li>
        {pathnames.slice(1).map((name, index) => {
          const routeTo = `/admin/${pathnames.slice(1, index + 2).join('/')}`;
          const isLast = index === pathnames.slice(1).length - 1;

          return (
            <li key={name} className="flex items-center">
              <FiChevronRight className="text-gray-500 mx-2" />
              {isLast ? (
                <span className="text-gray-900 dark:text-white font-medium capitalize">
                  {name.replace(/-/g, ' ')}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 capitalize"
                >
                  {name.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
