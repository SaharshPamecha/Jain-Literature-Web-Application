import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEdit2, FiSave } from 'react-icons/fi';

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState({
    about: {
      title: 'About Jain Digital Library',
      description: 'Preserving and sharing ancient Jain wisdom through modern technology',
      mission: 'To make Jain literature accessible to everyone while preserving its authenticity',
      vision: 'To become the worlds most comprehensive digital repository of Jain literature'
    },
    home: {
      heroTitle: 'Discover Ancient Jain Wisdom',
      heroSubtitle: 'Explore thousands of ancient Jain texts in multiple languages',
      featuredSection: 'Featured Books and Manuscripts'
    },
    contact: {
      email: 'contact@jainlibrary.org',
      phone: '+1 234 567 8900',
      address: '123 Wisdom Street, Knowledge City'
    }
  });

  const handleSave = () => {
    setEditing(false);
    alert('Content saved successfully!');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Content Management</h2>
        {editing ? (
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            <FiSave /> Save Changes
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
          >
            <FiEdit2 /> Edit Content
          </button>
        )}
      </div>

      {/* Content Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex space-x-4">
          {['about', 'home', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-sm font-medium capitalize ${
                activeTab === tab
                  ? 'border-b-2 border-primary-600 text-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Editor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        {activeTab === 'about' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={content.about.title}
                onChange={(e) => setContent({
                  ...content,
                  about: { ...content.about, title: e.target.value }
                })}
                disabled={!editing}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={content.about.description}
                onChange={(e) => setContent({
                  ...content,
                  about: { ...content.about, description: e.target.value }
                })}
                disabled={!editing}
                rows="4"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mission</label>
              <textarea
                value={content.about.mission}
                onChange={(e) => setContent({
                  ...content,
                  about: { ...content.about, mission: e.target.value }
                })}
                disabled={!editing}
                rows="3"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Vision</label>
              <textarea
                value={content.about.vision}
                onChange={(e) => setContent({
                  ...content,
                  about: { ...content.about, vision: e.target.value }
                })}
                disabled={!editing}
                rows="3"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}

        {activeTab === 'home' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Hero Title</label>
              <input
                type="text"
                value={content.home.heroTitle}
                onChange={(e) => setContent({
                  ...content,
                  home: { ...content.home, heroTitle: e.target.value }
                })}
                disabled={!editing}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Hero Subtitle</label>
              <input
                type="text"
                value={content.home.heroSubtitle}
                onChange={(e) => setContent({
                  ...content,
                  home: { ...content.home, heroSubtitle: e.target.value }
                })}
                disabled={!editing}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Featured Section Title</label>
              <input
                type="text"
                value={content.home.featuredSection}
                onChange={(e) => setContent({
                  ...content,
                  home: { ...content.home, featuredSection: e.target.value }
                })}
                disabled={!editing}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={content.contact.email}
                onChange={(e) => setContent({
                  ...content,
                  contact: { ...content.contact, email: e.target.value }
                })}
                disabled={!editing}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="text"
                value={content.contact.phone}
                onChange={(e) => setContent({
                  ...content,
                  contact: { ...content.contact, phone: e.target.value }
                })}
                disabled={!editing}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <textarea
                value={content.contact.address}
                onChange={(e) => setContent({
                  ...content,
                  contact: { ...content.contact, address: e.target.value }
                })}
                disabled={!editing}
                rows="3"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ContentManagement;
