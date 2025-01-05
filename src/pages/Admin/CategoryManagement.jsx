import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';

const CategoryManagement = () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Category Management</h1>
        <button
          onClick={() => setShowAddCategory(true)}
          className="btn-primary flex items-center gap-2"
        >
          <FiPlus /> Add Category
        </button>
      </div>

      {/* Category List */}
      <CategoryList
        onEdit={setSelectedCategory}
        onDelete={(id) => console.log('Delete category:', id)}
      />

      {/* Add/Edit Category Modal */}
      {(showAddCategory || selectedCategory) && (
        <CategoryForm
          category={selectedCategory}
          onClose={() => {
            setShowAddCategory(false);
            setSelectedCategory(null);
          }}
          onSave={(data) => console.log('Save category:', data)}
        />
      )}
    </div>
  );
};

export default CategoryManagement;
