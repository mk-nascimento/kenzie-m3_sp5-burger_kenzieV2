export interface iCartProviderProps {
  children: React.ReactNode;
}

export interface iProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

export interface iCartContextValues {
  addProductOnCart: (product: iProduct) => void;
  products: iProduct[];
  productsLoading: boolean;
  removeProductFromCart: (product: iProduct) => void;
}
