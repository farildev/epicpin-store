'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import { useTheme } from 'next-themes';
import useComponentStore from '@/store/useComponentStore';

const Sidebar: React.FC = () => {
  const { theme } = useTheme();

  const sidebar = useComponentStore((state) => state.sidebar);
  const closeSidebar = useComponentStore((state) => state.closeSidebar);

  return (
    <aside
      className={`border-l border-gray-200 dark:border-gray-100/10 fixed top-0 ${
        sidebar ? 'right-0 visible' : '-right-full invisible'
      } sm:w-[350px] w-full z-50 dark:bg-dark bg-light px-5 h-full transition-all duration-500`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between gap-2">
            <Link href={'/'}>
              {theme === 'light' ? (
                <Image
                  src={'/images/logo.svg'}
                  alt="Epicpin"
                  width={48}
                  height={48}
                />
              ) : (
                <Image
                  src={'/images/logo-white.svg'}
                  alt="Epicpin"
                  width={48}
                  height={48}
                />
              )}
            </Link>
            <Button
              onClick={closeSidebar}
              className="p-0 w-8 h-8 bg-light hover:bg-gray-200 shadow-none text-black dark:bg-neutral-800 dark:text-white border border-gray-200 dark:border-gray-100/10 dark:hover:bg-neutral-900"
            >
              <X />
            </Button>
          </div>
          <nav className="flex flex-col gap-4 mt-10">
            <Link
              className="text-2xl font-semibold hover:text-main hover:scale-[101%] transition-all duration-300"
              href={'/'}
            >
              Ana səhifə
            </Link>
            <Link
              className="text-2xl font-semibold hover:text-main hover:scale-[101%] transition-all duration-300"
              href={'/products'}
            >
              Məhsullar
            </Link>
            <Link
              className="text-2xl font-semibold hover:text-main hover:scale-[101%] transition-all duration-300"
              href={'/announces'}
            >
              Elanlar
            </Link>
            <Link
              className="text-2xl font-semibold hover:text-main hover:scale-[101%] transition-all duration-300"
              href={'/contact'}
            >
              Əlaqə
            </Link>
          </nav>
        </div>
        <span className="flex items-center py-8 justify-center text-sm text-center font-light text-gray-500">
          Epicpin Store © 2025. Bütün hüquqları qorunur.
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
