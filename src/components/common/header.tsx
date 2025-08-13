'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, AlignCenter, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import useBasketStore from '@/store/useBasketStore';
import useComponentStore from '@/store/useComponentStore';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const basket = useBasketStore((state) => state.basket ?? []);
  const openSidebar = useComponentStore((state) => state.openSidebar);

  return (
    <header className="fixed z-30 max-w-[1080px] mx-auto bg-white/50 dark:bg-dark/80 lg:rounded-full border border-gray-200/50 dark:border-gray-100/5 lg:top-5 top-0 left-0 right-0 w-full">
      <div className="siteContainer">
        <div className="flex items-center justify-between">
          <Link href={'/'}>
            {theme === 'light' ? (
              <Image
                width={50}
                height={50}
                src={'/images/logo.svg'}
                alt="EpicPin Logo"
              />
            ) : (
              <Image
                width={50}
                height={50}
                src={'/images/logo-white.svg'}
                alt="EpicPin Logo"
              />
            )}
          </Link>

          <nav className="md:flex hidden items-center gap-6 text-md font-medium">
            <Link
              className="hover:scale-105 transition-all duration-200 hover:text-main"
              href={'/'}
            >
              Ana səhifə
            </Link>
            <Link
              className="hover:scale-105 transition-all duration-200 hover:text-main"
              href={'/products'}
            >
              Məhsullar
            </Link>
            <Link
              className="hover:scale-105 transition-all duration-200 hover:text-main"
              href={'/contact'}
            >
              Əlaqə
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>

            <Link
              href={'/basket'}
              className="bg-orange-500 text-white flex items-center gap-2 hover:bg-orange-600 transition-all duration-300 py-2 md:px-6 px-4 rounded-full text-sm font-medium"
            >
              <div className="relative">
                <span className="absolute -top-1 -right-1 bg-white text-black w-4 h-4 rounded-full text-xs flex items-center justify-center">
                  {basket.length}
                </span>
                <ShoppingBag size={24} />
              </div>
              <span className="md:block hidden">Səbət</span>
            </Link>

            <button
              onClick={openSidebar}
              className="md:hidden block md:p-2 p-1 rounded-lg border transition-all duration-300 hover:bg-gray-200 dark:hover:bg-neutral-800/50 border-neutral-100/20 md:text-xl text-lg"
              aria-label="Open sidebar"
            >
              <AlignCenter />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
