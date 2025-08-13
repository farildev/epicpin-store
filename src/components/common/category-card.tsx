import Image from 'next/image';
import { Flame } from 'lucide-react';
import { Game } from '@/types/game';
import Link from 'next/link';

interface CategoryCardProps {
  game: Game;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ game }) => {
  const src = typeof game.image === 'string' ? game.image : game.image.src;

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg h-[250px] relative overflow-hidden flex items-center justify-center w-full">
        <Link href={`/products/${game.id}`}>
          <Image
            src={src}
            alt={game.name}
            fill
            className="w-full h-full hover:scale-110 transition-all duration-200 object-cover object-center"
          />
        </Link>
      </div>
      <span className="text-md font-semibold">{game.name}</span>
      {game.mostUsed && (
        <div className="text-xs font-semibold flex items-center bg-main text-white py-1 px-2 mt-1 w-fit rounded-full">
          <Flame size={18} /> Ən çox satan
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
