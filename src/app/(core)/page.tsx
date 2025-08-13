import InfoSection from '@/components/sections/info-section';
import AnimationSection from '@/components/sections/animation-section';
import BannerSection from '@/components/sections/banner-section';
import GamesSection from '@/components/sections/games-section';
import FaqSection from '@/components/sections/faq-section';
export default function Home() {
  return (
    <div className="w-full">
      <BannerSection />

      <div className="siteContainer flex flex-col gap-10">
        <AnimationSection />
        <InfoSection />
        <GamesSection />
        <FaqSection />
      </div>
    </div>
  );
}
