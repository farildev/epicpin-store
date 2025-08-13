'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import { MinusIcon, PlusIcon, ShoppingCart } from 'lucide-react';

interface Product {
  id: string | number;
  title: string;
  price: number;
  stock?: number;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-black/50 rounded-lg border-gray-100/10 border">
      <div className="w-full h-[200px] overflow-hidden rounded-t-md relative">
        <Image
          src={product.image || '/images/pubg.avif'}
          className="w-full h-full object-cover"
          fill
          alt={product.title}
        />
      </div>
      <div className="flex items-center justify-between gap-2 mt-3 px-5">
        <span className="text-white text-2xl font-semibold">
          {product.title}
        </span>
        <span className="text-[10px] inline-block my-2 py-1 px-3 border border-green-500 rounded-full text-green-500">
          {product.stock && product.stock > 0 ? 'Stokda var' : 'Tükənib'}
        </span>
      </div>
      <div className="flex items-center justify-between gap-2 mt-2 px-5">
        <span className="text-2xl font-semibold text-main">
          {product.price}₼
        </span>
        <div className="flex items-center gap-2">
          <Button>
            <MinusIcon size={20} />
          </Button>
          <span>0</span>
          <Button>
            <PlusIcon size={20} />
          </Button>
        </div>
      </div>
      <div className="p-5">
        <Button className="mt-3 w-full bg-main text-white font-medium hover:bg-orange-600">
          <ShoppingCart /> Səbətə əlavə et
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
