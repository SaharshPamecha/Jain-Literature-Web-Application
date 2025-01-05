import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAdminStore = create(
  persist(
    (set, get) => ({
      books: [
        {
          id: 1,
          title: "Tattvartha Sutra",
          author: "Acharya Umasvati",
          description: "A foundational text of Jainism explaining the nature of reality and the path to liberation.",
          isbn: "978-1234567890",
          language: "sanskrit",
          category: "scripture",
          status: "available",
          coverImage: "/images/books/tattvartha-sutra.jpg"
        }
      ],
      categories: [
        {
          id: 1,
          name: "Sacred Scriptures",
          description: "Original Jain canonical texts and sacred literature",
          bookCount: 45
        }
      ],
      users: [
        {
          id: 1,
          name: "Admin User",
          email: "admin@example.com",
          role: "admin",
          status: "active"
        }
      ],
      recentActivities: [],
      settings: {
        theme: 'light',
        language: 'en',
        notifications: true
      },

      // Book Actions
      addBook: (book) => {
        set((state) => {
          const newBook = {
            ...book,
            id: Date.now(),
            status: 'available',
            createdAt: new Date().toISOString()
          };
          return {
            books: [...state.books, newBook],
            recentActivities: [
              {
                type: 'book',
                action: 'add',
                item: `Added book: ${book.title}`,
                timestamp: new Date()
              },
              ...state.recentActivities
            ]
          };
        });
      },

      updateBook: (id, updatedBook) => {
        set((state) => ({
          books: state.books.map(book => 
            book.id === id ? { ...book, ...updatedBook, updatedAt: new Date().toISOString() } : book
          ),
          recentActivities: [
            {
              type: 'book',
              action: 'update',
              item: `Updated book: ${updatedBook.title}`,
              timestamp: new Date()
            },
            ...state.recentActivities
          ]
        }));
      },

      deleteBook: (id) => {
        set((state) => {
          const bookTitle = state.books.find(b => b.id === id)?.title;
          return {
            books: state.books.filter(book => book.id !== id),
            recentActivities: [
              {
                type: 'book',
                action: 'delete',
                item: `Deleted book: ${bookTitle}`,
                timestamp: new Date()
              },
              ...state.recentActivities
            ]
          };
        });
      },

      // Category Actions
      addCategory: (category) => {
        set((state) => ({
          categories: [...state.categories, { ...category, id: Date.now() }],
          recentActivities: [
            {
              type: 'category',
              action: 'add',
              item: `Added category: ${category.name}`,
              timestamp: new Date()
            },
            ...state.recentActivities
          ]
        }));
      },

      updateCategory: (id, updatedCategory) => {
        set((state) => ({
          categories: state.categories.map(cat => 
            cat.id === id ? { ...cat, ...updatedCategory } : cat
          ),
          recentActivities: [
            {
              type: 'category',
              action: 'update',
              item: `Updated category: ${updatedCategory.name}`,
              timestamp: new Date()
            },
            ...state.recentActivities
          ]
        }));
      },

      deleteCategory: (id) => {
        set((state) => {
          const categoryName = state.categories.find(c => c.id === id)?.name;
          return {
            categories: state.categories.filter(cat => cat.id !== id),
            recentActivities: [
              {
                type: 'category',
                action: 'delete',
                item: `Deleted category: ${categoryName}`,
                timestamp: new Date()
              },
              ...state.recentActivities
            ]
          };
        });
      },

      // User Actions
      addUser: (user) => {
        set((state) => ({
          users: [...state.users, { ...user, id: Date.now() }],
          recentActivities: [
            {
              type: 'user',
              action: 'add',
              item: `Added user: ${user.name}`,
              timestamp: new Date()
            },
            ...state.recentActivities
          ]
        }));
      },

      updateUser: (id, updatedUser) => {
        set((state) => ({
          users: state.users.map(user => 
            user.id === id ? { ...user, ...updatedUser } : user
          ),
          recentActivities: [
            {
              type: 'user',
              action: 'update',
              item: `Updated user: ${updatedUser.name}`,
              timestamp: new Date()
            },
            ...state.recentActivities
          ]
        }));
      },

      deleteUser: (id) => {
        set((state) => {
          const userName = state.users.find(u => u.id === id)?.name;
          return {
            users: state.users.filter(user => user.id !== id),
            recentActivities: [
              {
                type: 'user',
                action: 'delete',
                item: `Deleted user: ${userName}`,
                timestamp: new Date()
              },
              ...state.recentActivities
            ]
          };
        });
      },

      // Settings Actions
      updateSettings: (newSettings) => {
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
          recentActivities: [
            {
              type: 'settings',
              action: 'update',
              item: 'Updated system settings',
              timestamp: new Date()
            },
            ...state.recentActivities
          ]
        }));
      },

      // Bulk Operations
      bulkImportBooks: (books) => {
        set((state) => ({
          books: [
            ...state.books,
            ...books.map(book => ({
              ...book,
              id: Date.now() + Math.random(),
              status: 'available',
              createdAt: new Date().toISOString()
            }))
          ],
          recentActivities: [
            {
              type: 'book',
              action: 'bulk-import',
              item: `Imported ${books.length} books`,
              timestamp: new Date()
            },
            ...state.recentActivities
          ]
        }));
      }
    }),
    {
      name: 'admin-storage',
      getStorage: () => localStorage
    }
  )
);

export default useAdminStore;
