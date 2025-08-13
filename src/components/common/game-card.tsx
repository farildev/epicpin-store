'use client';
import React from 'react';
import { Button } from '../ui/button';
import { ShoppingBasket, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';
import useBasketStore from '@/store/useBasketStore';

interface Product {
  id: string | number;
  title: string;
  description: string;
  price: number;
}

interface GameCardProps {
  product: Product;
  icon?: string;
}

const GameCard: React.FC<GameCardProps> = ({ product, icon }) => {
  const addToBasket = useBasketStore((state) => state.addToBasket);

  const handleAddToBasket = (product: Product) => {
    addToBasket({ ...product, quantity: 1 }); // <- quantity əlavə edildi
    toast.success(`${product.title} adlı məhsul səbətə əlavə edildi`);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-100/10 bg-gray-100 dark:bg-neutral-900 rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-3 gap-2">
        {icon && (
          <Image src={icon} alt={product.title} width={40} height={40} />
        )}
        <h3 className="text-lg font-semibold">{product.title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description}
      </p>
      <div className="flex justify-between items-center mt-5">
        <span className="text-2xl font-bold text-main">{product.price} ₼</span>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => handleAddToBasket(product)}
            className="hover:bg-main/90 bg-main p-2 border bg-transparent dark:bg-transparent text-main dark:text-main dark:hover:bg-main dark:hover:text-white hover:text-white border-main"
          >
            <ShoppingBasket size={16} />
          </Button>
          <Button className="bg-main dark:bg-main dark:text-white text-white dark:hover:bg-main/90">
            <ShoppingCart size={16} className="mr-2" />
            İndi al
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
