// store/useBasketStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface BasketItem {
  id: string | number;
  title: string;
  description?: string;
  price: number;
  quantity: number;
}

interface BasketState {
  basket: BasketItem[];
  addToBasket: (product: BasketItem) => void;
  removeFromBasket: (id: string | number) => void;
  clearBasket: () => void;
}

const useBasketStore = create<BasketState>()(
  persist(
    (set, get) => ({
      basket: [],

      addToBasket: (product) => {
  const existingItem = get().basket.find((item) => item.id === product.id);
  if (existingItem) {
    set({
      basket: get().basket.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    });
  } else {
    set({
      basket: [...get().basket, { ...product, quantity: 1 }],
    });
  }
},

      removeFromBasket: (id) => {
        set({
          basket: get().basket.filter((item) => item.id !== id),
        });
      },

      clearBasket: () => set({ basket: [] }),
    }),
    {
      name: 'basket-storage',
    }
  )
);

export default useBasketStore;
