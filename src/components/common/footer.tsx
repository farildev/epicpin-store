'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import { gamesData } from '@/mocks/gamesData';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-100/10 py-10 w-full">
      <div className="siteContainer flex flex-col gap-10">
        {/* Üst hissə */}
        <div className="flex justify-between sm:flex-row flex-col gap-8">
          {/* Logo və kontakt */}
          <div className="flex flex-col sm:w-1/3 w-full gap-4">
            <Link href="/">
              {theme === 'light' ? (
                <Image
                  src="/images/logo.svg"
                  width={64}
                  height={64}
                  alt="EpicPin Logo"
                />
              ) : (
                <Image
                  src="/images/logo-white.svg"
                  width={64}
                  height={64}
                  alt="EpicPin Logo"
                />
              )}
            </Link>
            <p className="sm:text-sm text-xs font-normal text-gray-500 max-w-[380px]">
              Epicpin Store sizə elektronik oyun ödənişlərini asanlıqla həyata
              keçirməyə icazə verən bir sistemdir.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <Mail size={16} />
              <a href="mailto:epicpincontact@gmail.com">
                epicpincontact@gmail.com
              </a>
            </div>
          </div>

          {/* Naviqasiya */}
          <nav className="flex sm:justify-center sm:w-1/3 w-full">
            <div className="flex flex-col gap-3">
              <h3 className="sm:text-lg text-md font-medium ">Epicpin Store</h3>
              <ul className="flex flex-col gap-4 text-sm font-medium">
                <li>
                  <Link
                    className="text-gray-500 hover:text-white transition-colors duration-200"
                    href={'/'}
                  >
                    Ana səhifə
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-white transition-colors duration-200"
                    href={'/products'}
                  >
                    Məhsullar
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-white transition-colors duration-200"
                    href={'/announces'}
                  >
                    Elanlar
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-white transition-colors duration-200"
                    href={'/contact'}
                  >
                    Əlaqə
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Ən çox satan oyunlar */}
          <div className="flex sm:justify-center sm:w-1/3 w-full">
            <div className="flex flex-col gap-3">
              <h3 className="sm:text-lg text-md font-medium">Ən çox satan</h3>
              <ul className="flex flex-col gap-4 text-sm font-medium">
                {gamesData
                  .map((game) => (
                    <li key={game.id}>
                      <Link
                        className="text-gray-500 hover:text-white transition-colors duration-200"
                        href={`/products/${game.id}`}
                      >
                        {game.name}
                      </Link>
                    </li>
                  ))
                  .slice(0, 4)}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-gray-100/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-500 flex-1">
              Copyright © {currentYear} Bütün hüquqları qorunur.
            </span>
            <span className="text-sm text-gray-500 ">
              POWERED BY{' '}
              <a
                className="underline"
                href="https://www.instagram.com/corotive/"
              >
                Corotive
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/+994554570995"
              aria-label="WhatsApp"
              target="_blank"
              className="flex items-center justify-center p-2 rounded-full bg-gray-100 dark:bg-gray-100/10 hover:bg-green-500 hover:text-white transition-colors duration-200"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="https://www.instagram.com/epicpin.store?igsh=MWM0emMzZGRqMGNycQ=="
              aria-label="Instagram"
              target="blank"
              className="flex items-center justify-center p-2 rounded-full bg-gray-100 dark:bg-gray-100/10 hover:bg-pink-600 hover:text-white transition-colors duration-200"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@epicpin.store?_t=ZS-8yqhCF4LCds&_r=1"
              aria-label="TikTok"
              target="blank"
              className="flex items-center justify-center p-2 rounded-full bg-gray-100 dark:bg-gray-100/10 hover:bg-black hover:text-white transition-colors duration-200"
            >
              <FaTiktok size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
