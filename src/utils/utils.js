export const ENTRYPOINT = 'https://localhost/'

export const authProvider = {
  login: async ({ username, password }) => {
    try {
      const response = await fetch(`${ENTRYPOINT}auth`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
      
      const { token } = await response.json();
      localStorage.setItem('token', token);
    } catch (error) {
      throw new Error('Authentication failed');
    }
  },
  
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  
  checkError: () => Promise.resolve(),
  
  getPermissions: () => Promise.resolve(),
};
