import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

const USER_ROLES = {
  ADMIN: 'admin',
  GUIDE: 'guide',
  USER: 'user'
};

const PERMISSIONS = {
  [USER_ROLES.ADMIN]: ['manage_tours', 'manage_users', 'manage_bookings', 'view_analytics'],
  [USER_ROLES.GUIDE]: ['view_tours', 'manage_own_tours', 'view_bookings'],
  [USER_ROLES.USER]: ['view_tours', 'make_bookings']
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser({
        ...parsedUser,
        permissions: PERMISSIONS[parsedUser.role] || []
      });
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    const userWithPermissions = {
      ...userData,
      permissions: PERMISSIONS[userData.role] || []
    };
    setUser(userWithPermissions);
    localStorage.setItem('user', JSON.stringify(userWithPermissions));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const hasPermission = (permission) => {
    return user?.permissions?.includes(permission);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, hasPermission, USER_ROLES }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 