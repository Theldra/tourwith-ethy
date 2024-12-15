import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ children, requiredPermissions = [] }) {
  const { user, loading, hasPermission } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredPermissions.length > 0 && !requiredPermissions.every(hasPermission)) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute; 