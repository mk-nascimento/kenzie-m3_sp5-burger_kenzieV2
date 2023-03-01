import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  iApiData,
  iUser,
  iUserContextValues,
  iUserProviderProps,
  iUserResponse,
} from './types';
import api from '../../services/api';

export const UserContext = createContext<iUserContextValues>(
  {} as iUserContextValues
);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<iUser>({} as iUser);
  const [userLoading, setUserLoading] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem('@Kenzie-Burguer__AuthToken')
  );

  useEffect(() => {
    if (token) navigate('/shop');
  }, [token]);

  const setNewtoken = (newToken: string) => {
    if (!newToken) localStorage.removeItem('@Kenzie-Burguer__AuthToken');
    else {
      localStorage.setItem('@Kenzie-Burguer__AuthToken', newToken);
      setToken(newToken);
    }
  };

  const userLogin = async (formData: iApiData) => {
    try {
      setUserLoading(true);

      const loginResponse = await api.post<iUserResponse>('/login', formData);

      if (loginResponse.data) {
        setUser(loginResponse.data.user);
        setNewtoken(loginResponse.data.accessToken);
        navigate('/shop');
      }
    } catch (error) {
      // if (axios.isAxiosError<string>(error))
      //   console.error(error.response?.data);
    } finally {
      setUserLoading(false);
    }
  };

  const userLogoff = () => {
    setNewtoken('');
    navigate('/');
  };

  const userRegister = async (formData: iApiData) => {
    try {
      setUserLoading(true);

      const registerResponse = await api.post<iUserResponse>(
        '/users',
        formData
      );

      if (registerResponse.data) {
        setUser(registerResponse.data.user);
        setNewtoken(registerResponse.data.accessToken);
        navigate('/shop');
      }
    } catch (error) {
      // if (axios.isAxiosError<string>(error))
      //   console.error(error.response?.data);
    } finally {
      setUserLoading(false);
    }
  };

  const values = {
    token,
    user,
    userLoading,
    userLogin,
    userLogoff,
    userRegister,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
