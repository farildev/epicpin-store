import GamesList from '@/components/common/games-list';
import { gamesData } from '@/mocks/gamesData';

const Games = () => {
  return (
    <div className="min-h-dvh w-full pt-[100px] pb-12 overflow-hidden">
      <div className="siteContainer">
        <div className="flex h-full">
          <GamesList data={gamesData} />
        </div>
      </div>
    </div>
  );
};

export default Games;
