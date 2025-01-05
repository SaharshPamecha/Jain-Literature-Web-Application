import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">Jain Digital Library</h3>
            <p className="text-gray-400 mb-4">
              Preserving and sharing ancient Jain wisdom through modern technology.
              Access thousands of texts and manuscripts from anywhere in the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/library" className="hover:text-white transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiMail className="mr-2" />
                <a href="mailto:contact@jainlibrary.org" className="hover:text-white transition-colors">
                  contact@jainlibrary.org
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <FiMapPin className="mr-2" />
                <span>123 Wisdom Street, Knowledge City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Jain Digital Library. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
