import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { iCartContextValues, iCartProviderProps, iProduct } from './types';
import api from '../../services/api';
import { UserContext } from '../UserContext';

export const CartContext = createContext<iCartContextValues>(
  {} as iCartContextValues
);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const { token, userLogoff } = useContext(UserContext);
  const [products, setProducts] = useState<iProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<iProduct[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);

  useEffect(() => {
    getProducts();

    const cartStorage = localStorage.getItem('@Kenzie-Burguer__Cart-Products');

    if (cartStorage) {
      const parsedCartStorage: iProduct[] = JSON.parse(cartStorage);

      setCartProducts(parsedCartStorage);
    }
  }, []);

  useEffect(() => {
    if (cartProducts.length)
      localStorage.setItem(
        '@Kenzie-Burguer__Cart-Products',
        JSON.stringify(cartProducts)
      );
    else {
      localStorage.removeItem('@Kenzie-Burguer__Cart-Products');
    }
  }, [cartProducts]);

  const removeProduct = (product: iProduct) =>
    cartProducts.filter((cartProduct) => cartProduct.id !== product.id);

  const addProductOnCart = (product: iProduct) =>
    setCartProducts([...cartProducts, product]);

  const removeProductFromCart = (product: iProduct) =>
    setCartProducts(removeProduct(product));

  const getProducts = async () => {
    if (token)
      try {
        setProductsLoading(true);

        const productsResponse = await api.get<iProduct[]>('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (productsResponse.data) setProducts(productsResponse.data);
      } catch (error) {
        if (axios.isAxiosError<string>(error))
          if (error.response?.data === 'jwt expired') {
            userLogoff();
          }
        // Sessão expirada, faça login novamente
      } finally {
        setProductsLoading(false);
      }
  };

  const values = {
    addProductOnCart,
    cartProducts,
    products,
    productsLoading,
    removeProductFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
