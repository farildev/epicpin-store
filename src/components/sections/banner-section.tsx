'use client';
import { Telescope, Zap, ShieldPlus, BadgePercent } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const BannerSection: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`w-full h-dvh ${
        theme === 'light' ? 'bg-hero-light' : 'bg-hero-dark'
      } overflow-y-hidden`}
    >
      <div className="siteContainer h-full">
        <div className="h-full flex justify-between gap-4">
          <div className="flex flex-col gap-5 justify-center lg:w-[65%] w-full left-box">
            <div className="flex items-center gap-2">
              <span className="bg-main p-1 rounded-full text-white">
                <BadgePercent />
              </span>
              <span className="md:text-sm text-xs font-medium text-black dark:text-white">
                Yüksək endirimli açılışa özəl satışlar başladı!
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap md:items-center gap-3">
                <h1 className="lg:text-7xl sm:text-6xl leading-normal text-3xl font-semibold">
                  Sürətli
                </h1>
                <div className="bg-main lg:p-3 p-2 flex w-fit items-center gap-4 rounded-full">
                  <div className="lg:p-2 p-1 rounded-full bg-orange-300/50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 text-white">
                    <Zap />
                  </div>
                  <div className="lg:p-2 p-1 rounded-full bg-orange-300/50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 text-white">
                    <ShieldPlus />
                  </div>
                </div>
                <h1 className="lg:text-7xl sm:text-6xl text-3xl leading-normal font-semibold">
                  Güvənli
                </h1>
              </div>
              <h1 className="lg:text-7xl sm:text-6xl text-3xl font-semibold">
                Oyun mağazası
              </h1>
            </div>

            <div className="mt-3">
              <Link
                href="/products"
                className="py-3 outline-none px-6 rounded-lg w-fit bg-main text-white hover:bg-orange-600 transition-colors duration-200 font-medium md:text-sm text-xs gap-2 flex items-center justify-center"
              >
                <Telescope size={18} /> Bütün oyunlar
              </Link>
            </div>

            <div className="mt-5 flex md:flex-row flex-col md:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-main p-1 rounded-full text-white">
                  <Zap size={14} />
                </span>
                <span className="md:text-sm text-xs font-medium">
                  Dəstəklənən platformalar
                </span>
              </div>
              <div className="flex items-center gap-5">
                <img
                  className="w-8 grayscale-[20] hover:grayscale-0 transition-all duration-300"
                  src="https://www.pubgmobile.com/images/event/brandassets/img-logo1.png"
                  alt="PUBG Mobile"
                />
                <img
                  className="w-8 grayscale-[20] hover:grayscale-0 transition-all duration-300"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"
                  alt="Steam"
                />
                <img
                  className="w-10 grayscale-[20] hover:grayscale-0 transition-all duration-300"
                  src="https://static.vecteezy.com/system/resources/previews/022/636/388/non_2x/valorant-logo-valorant-icon-transparent-free-png.png"
                  alt="Valorant"
                />
                <img
                  className="w-16 grayscale-[20] hover:grayscale-0 transition-all duration-300"
                  src="https://fifauteam.com/images/fc25/logo/long-green.webp"
                  alt="EA FC 25"
                />
              </div>
            </div>
          </div>

          {/*
          <div
            ref={rightBoxRef}
            className="flex-1 lg:flex hidden items-center relative justify-center overflow-hidden right-box"
          >
            <img
              className="w-[800px] absolute -bottom-[15%] -right-[25%] h-full object-contain"
              src="https://preview.redd.it/enoiz019r2t41.png?auto=webp&s=aeccf4e153a10317af50da57a8960051d996f502"
              alt="Phoenix-Valorant"
            />
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
