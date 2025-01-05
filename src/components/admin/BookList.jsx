import React from 'react';
import { useBookStore } from '../../stores/bookStore';

const BookList = () => {
  const { books } = useBookStore();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Books</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <div className="grid gap-4">
          {books.map((book) => (
            <div key={book.id} className="border rounded p-4">
              <h3 className="font-bold">{book.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{book.author}</p>
              <div className="mt-2 space-x-2">
                <button className="text-blue-600 hover:text-blue-700">Edit</button>
                <button className="text-red-600 hover:text-red-700">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
