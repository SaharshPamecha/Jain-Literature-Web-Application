import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSave } from 'react-icons/fi';

const Settings = () => {
  const [settings, setSettings] = useState({
    general: {
      siteName: 'Jain Digital Library',
      siteDescription: 'Digital repository of Jain literature',
      contactEmail: 'contact@jainlibrary.org',
      language: 'en'
    },
    appearance: {
      theme: 'light',
      primaryColor: '#8B4513',
      fontSize: 'medium'
    },
    notifications: {
      emailNotifications: true,
      newBookAlert: true,
      newsletterSubscription: true
    }
  });

  const handleSave = () => {
    // Save settings to backend
    alert('Settings saved successfully!');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Settings</h2>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
        >
          <FiSave /> Save Changes
        </button>
      </div>

      <div className="space-y-8">
        {/* General Settings */}
        <section>
          <h3 className="text-lg font-semibold mb-4">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Site Name</label>
              <input
                type="text"
                value={settings.general.siteName}
                onChange={(e) => setSettings({
                  ...settings,
                  general: { ...settings.general, siteName: e.target.value }
                })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Site Description</label>
              <textarea
                value={settings.general.siteDescription}
                onChange={(e) => setSettings({
                  ...settings,
                  general: { ...settings.general, siteDescription: e.target.value }
                })}
                rows="3"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Contact Email</label>
              <input
                type="email"
                value={settings.general.contactEmail}
                onChange={(e) => setSettings({
                  ...settings,
                  general: { ...settings.general, contactEmail: e.target.value }
                })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Default Language</label>
              <select
                value={settings.general.language}
                onChange={(e) => setSettings({
                  ...settings,
                  general: { ...settings.general, language: e.target.value }
                })}
                className="w-full p-2 border rounded"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="gu">Gujarati</option>
              </select>
            </div>
          </div>
        </section>

        {/* Appearance Settings */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Appearance</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Theme</label>
              <select
                value={settings.appearance.theme}
                onChange={(e) => setSettings({
                  ...settings,
                  appearance: { ...settings.appearance, theme: e.target.value }
                })}
                className="w-full p-2 border rounded"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto (System)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Primary Color</label>
              <input
                type="color"
                value={settings.appearance.primaryColor}
                onChange={(e) => setSettings({
                  ...settings,
                  appearance: { ...settings.appearance, primaryColor: e.target.value }
                })}
                className="w-full p-2 border rounded h-10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Font Size</label>
              <select
                value={settings.appearance.fontSize}
                onChange={(e) => setSettings({
                  ...settings,
                  appearance: { ...settings.appearance, fontSize: e.target.value }
                })}
                className="w-full p-2 border rounded"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>
        </section>

        {/* Notification Settings */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                checked={settings.notifications.emailNotifications}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, emailNotifications: e.target.checked }
                })}
                className="mr-2"
              />
              <label htmlFor="emailNotifications">Email Notifications</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newBookAlert"
                checked={settings.notifications.newBookAlert}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, newBookAlert: e.target.checked }
                })}
                className="mr-2"
              />
              <label htmlFor="newBookAlert">New Book Alerts</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletterSubscription"
                checked={settings.notifications.newsletterSubscription}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, newsletterSubscription: e.target.checked }
                })}
                className="mr-2"
              />
              <label htmlFor="newsletterSubscription">Newsletter Subscription</label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
