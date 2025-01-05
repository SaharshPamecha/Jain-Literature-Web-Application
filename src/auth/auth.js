// Simple auth service for demo purposes
const AUTH_KEY = 'jain_library_auth';

const authService = {
  login: (username, password) => {
    if (username === 'admin' && password === 'password') {
      const user = {
        username: 'admin',
        role: 'admin',
        token: 'demo-token'
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      return Promise.resolve(user);
    }
    return Promise.reject(new Error('Invalid credentials'));
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
    return Promise.resolve();
  },

  getCurrentUser: () => {
    const user = localStorage.getItem(AUTH_KEY);
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem(AUTH_KEY);
  }
};

export default authService;
