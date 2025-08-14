import React from 'react';
import { Flame, Star } from 'lucide-react';
import { notFound } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import GameCard from '@/components/common/game-card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { gamesData } from '@/mocks/gamesData';

interface Product {
  id: string | number;
  title: string;
  description: string;
  price: number;
  quantity?: number;
}

interface Game {
  id: number;
  name: string;
  description?: string;
  image: string | StaticImageData;
  icon?: string;
  mostUsed?: boolean;
  gameRating?: number;
  products?: Product[];
}

interface GameDetailProps {
  params: {
    id: string;
  };
}

const GameDetail: React.FC<GameDetailProps> = async ({ params }) => {
  const { id } = params;
  const game = gamesData.find((g) => g.id === parseInt(id)) as Game | undefined;

  if (!game) {
    notFound();
  }

  const imageSrc = typeof game.image === 'string' ? game.image : game.image.src;

  return (
    <div className="min-h-dvh pt-[120px] pb-12">
      <div className="siteContainer">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Ana səhifə</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Məhsullar</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{game.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="max-w-6xl mx-auto mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="rounded-lg h-[400px] w-full overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={imageSrc}
                  alt={game.name}
                  width={600}
                  height={400}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">{game.name}</h1>
                {game.mostUsed && (
                  <div className="text-xs font-semibold text-white flex items-center bg-main py-1 px-2 rounded-full">
                    <Flame size={18} />
                    Ən çox satan
                  </div>
                )}
              </div>

              {game.gameRating && (
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500 fill-current" size={20} />
                  <span className="text-lg font-semibold">
                    {game.gameRating}
                  </span>
                  <span className="text-gray-500">
                    Metacritic istifadəçi reytinqi
                  </span>
                </div>
              )}

              {game.description && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Təsvir</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {game.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {game.products && game.products.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold mb-6">Məhsullar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {game.products.map((product) => (
                  <GameCard
                    product={product}
                    icon={game.icon}
                    key={product.id}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Bu oyun üçün hal-hazırda heç bir paket mövcud deyil.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
