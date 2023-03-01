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
  amountCartValue: number;
  products: iProduct[];
  cartProducts: iProduct[];
  clearCart: () => void;
  productsLoading: boolean;
  removeProductFromCart: (product: iProduct) => void;
  setModal: () => void;
  showModal: boolean;
}
