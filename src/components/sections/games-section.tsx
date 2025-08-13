import CategoryCard from '@/components/common/category-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { gamesData } from '@/mocks/gamesData';
const GamesSection = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold">Oyunlarımız</h1>
      <Carousel className="mt-5">
        <CarouselContent>
          {gamesData.map((game, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 overflow-hidden"
            >
              <CategoryCard game={game} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default GamesSection;
