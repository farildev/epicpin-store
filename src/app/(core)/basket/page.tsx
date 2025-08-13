'use client';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, Check, ShoppingCart, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import useBasketStore from '@/store/useBasketStore';
import BasketItemCard from '@/components/common/basket-item-card';

interface BasketItem {
  id: string | number;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

const Basket: React.FC = () => {
  const router = useRouter();
  const basket = useBasketStore((state) => state.basket) as BasketItem[];
  const clearBasket = useBasketStore((state) => state.clearBasket);

  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * (item.quantity || 0),
    0,
  );

  return (
    <div className="w-full min-h-dvh pt-[120px] pb-10">
      <div className="siteContainer">
        <h2 className="text-3xl font-semibold">Səbətim</h2>

        <div className="flex mt-5 items-center justify-between">
          <span className="text-lg font-semibold bg-transparent border-b border-main text-main dark:border-white dark:text-white pb-3">
            Ümumi qiymət : {totalPrice.toFixed(2)} ₼
          </span>

          <div className="flex items-center gap-2">
            <Button
              onClick={clearBasket}
              className="bg-light text-black border dark:text-white hover:bg-light/80 dark:hover:bg-neutral-800 dark:border-gray-200/10 shadow-none dark:bg-neutral-900"
            >
              <Trash />
              Səbəti boşalt
            </Button>
            <Button className="bg-main text-white shadow-none hover:bg-main/80">
              <Check />
              Sifarişi tamamla
            </Button>
          </div>
        </div>

        {basket.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 mt-10">
            {basket.map((item) => (
              <BasketItemCard item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center justify-center gap-5">
            <ShoppingCart className="dark:text-white" size={96} />
            <h2 className="text-2xl dark:text-white font-medium">
              Səbət hal-hazırda boşdur!
            </h2>
            <Button
              className="bg-main text-white"
              onClick={() => router.push('/games')}
            >
              <ArrowLeft />
              Alışveriş edin
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
