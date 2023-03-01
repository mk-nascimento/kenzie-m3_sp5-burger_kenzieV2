import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const ProtectedRoutes = () => {
  const { token } = useContext(UserContext);

  return token ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;
