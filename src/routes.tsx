import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProtectedRoutes from './pages/ProtectedRoutes';
import PublicRoutes from './pages/PublicRoutes';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => (
  <Routes>
    <Route path='/' element={<PublicRoutes />}>
      <Route index element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Route>

    <Route path='/shop' element={<ProtectedRoutes />}>
      <Route index element={<ShopPage />} />
    </Route>
  </Routes>
);

export default Router;
