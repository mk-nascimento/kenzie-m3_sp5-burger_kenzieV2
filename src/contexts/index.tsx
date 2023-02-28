import { CartProvider } from './CartContext';
import { iProviderProps } from './types';
import { UserProvider } from './UserContext';

const Providers = ({ children }: iProviderProps) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
);

export default Providers;
