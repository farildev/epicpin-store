'use client';
import { Info, SearchX } from 'lucide-react';
import { Input } from '../ui/input';
import CategoryCard from './category-card';
import { useCallback, useState } from 'react';
import { StaticImageData } from 'next/image';

interface Game {
  id: string | number;
  name: string;
  image: string | StaticImageData;
  mostUsed?: boolean;
}

interface GamesListProps {
  data: Game[];
}

const GamesList: React.FC<GamesListProps> = ({ data }: GamesListProps) => {
  const [search, setSearch] = useState('');

  const filteredData = data.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderEmptyGames = useCallback(
    () => (
      <div className="min-h-[600px] w-full flex items-center justify-center flex-col gap-5">
        <Info size={64} className="text-gray-400" />
        <p className="md:text-4xl text-2xl font-semibold text-gray-400">
          Hal-hazırda heç bir oyun yoxdur.
        </p>
      </div>
    ),
    [],
  );

  const renderFilteredEmptyGames = () => (
    <div className="min-h-[600px] w-full flex items-center justify-center flex-col gap-5">
      <SearchX size={64} className="text-gray-400" />
      <p className="md:text-4xl text-2xl font-semibold text-gray-400">
        Axtardığınız oyun tapılmadı
      </p>
    </div>
  );

  if (data.length === 0) return renderEmptyGames();

  return (
    <div className="flex-1 h-full overflow-y-auto px-4 pt-[25px]">
      <div className="mb-4 flex items-center justify-between gap-2">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="border shadow-none dark:border-gray-100/20 py-6"
          placeholder="Oyun, kateqoriya və s. axtarın"
        />
      </div>

      {filteredData.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          {filteredData.map((game) => (
            <CategoryCard game={game} key={game.id} />
          ))}
        </div>
      ) : (
        renderFilteredEmptyGames()
      )}
    </div>
  );
};

export default GamesList;
