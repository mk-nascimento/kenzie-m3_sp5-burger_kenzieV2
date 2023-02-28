export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
}

export interface iApiData {
  email: string;
  name?: string;
  password: string;
}

export interface iUserResponse {
  accessToken: string;
  user: iUser;
}

export interface iUserContextValues {
  token: string | null;
  user: iUser;
  userLoading: boolean;
  userLogin: (formData: iApiData) => Promise<void>;
  userLogoff: () => void;
  userRegister: (formData: iApiData) => Promise<void>;
}
