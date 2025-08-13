'use client';

import React from 'react';
import { Button } from '../ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import useBasketStore from '@/store/useBasketStore';

export interface BasketItem {
  id: string | number;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

interface BasketItemCardProps {
  item: BasketItem;
}

const BasketItemCard: React.FC<BasketItemCardProps> = ({ item }) => {
  const { removeFromBasket, addToBasket } = useBasketStore();

  const handleDecrease = () => {
    if (item.quantity === 1) {
      removeFromBasket(item.id);
    } else {
      useBasketStore.setState((state) => ({
        basket: state.basket.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p,
        ),
      }));
    }
  };

  return (
    <div className="border border-gray-200 dark:border-gray-100/10 bg-white dark:bg-neutral-900 rounded-lg p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <span className="text-main text-lg font-bold">
          {(item.price * item.quantity).toFixed(2)} ₼
        </span>
      </div>
      <p>{item.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleDecrease}>
            <Minus size={16} />
          </Button>
          <span className="px-2">{item.quantity}</span>
          <Button variant="outline" onClick={() => addToBasket(item)}>
            <Plus size={16} />
          </Button>
        </div>

        <Button variant="destructive" onClick={() => removeFromBasket(item.id)}>
          <Trash2 size={16} className="mr-1" />
          Sil
        </Button>
      </div>
    </div>
  );
};

export default BasketItemCard;
